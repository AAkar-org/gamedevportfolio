import { config } from "@/data/config";
import nodemailer from "nodemailer";
import { z } from "zod";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Too many requests. Please wait a moment before sending another message." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess) {
      return Response.json(
        { error: zodError?.issues?.[0]?.message || "Invalid input!" },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || config.email;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.trim();

    if (!gmailAppPassword || gmailAppPassword === "your_16_char_app_password") {
      console.warn("GMAIL_APP_PASSWORD is not configured in .env.local");
      return Response.json(
        {
          error: `Gmail App Password is not set. Please add GMAIL_APP_PASSWORD in .env.local to send emails to ${gmailUser}.`,
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0f172a; color: #f8fafc; padding: 32px 24px; border-radius: 12px; max-width: 560px; margin: 0 auto; border: 1px solid #334155;">
        <div style="border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="margin: 0 0 6px 0; font-size: 20px; color: #38bdf8; font-weight: 700;">
            New Portfolio Message
          </h2>
          <p style="margin: 0; font-size: 14px; color: #94a3b8;">
            Received from your portfolio contact form
          </p>
        </div>

        <div style="margin-bottom: 16px;">
          <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 4px;">
            Sender Name
          </div>
          <div style="font-size: 16px; font-weight: 600; color: #ffffff;">
            ${escapeHtml(zodData.fullName)}
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 4px;">
            Sender Email
          </div>
          <a href="mailto:${escapeHtml(zodData.email)}" style="font-size: 15px; color: #38bdf8; text-decoration: underline;">
            ${escapeHtml(zodData.email)}
          </a>
        </div>

        <div style="background-color: #1e293b; padding: 16px 20px; border-radius: 8px; border: 1px solid #334155;">
          <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 8px;">
            Message
          </div>
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${escapeHtml(zodData.message)}</p>
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #1e293b; font-size: 12px; color: #64748b; text-align: center;">
          You can directly reply to this email in your client to respond to ${escapeHtml(zodData.fullName)} (${escapeHtml(zodData.email)}).
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <${gmailUser}>`,
      to: config.email,
      replyTo: zodData.email,
      subject: `New Portfolio Message from ${zodData.fullName}`,
      text: `Name: ${zodData.fullName}\nEmail: ${zodData.email}\n\nMessage:\n${zodData.message}`,
      html: htmlContent,
    });

    return Response.json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error("Nodemailer Gmail error:", error);
    return Response.json(
      {
        error:
          error?.message ||
          "Failed to send email. Please check your Gmail App Password credentials.",
      },
      { status: 500 }
    );
  }
}

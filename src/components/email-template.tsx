import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: "#0f172a",
      color: "#f8fafc",
      padding: "32px 24px",
      borderRadius: "12px",
      maxWidth: "560px",
      margin: "0 auto",
      border: "1px solid #334155",
    }}
  >
    <div
      style={{
        borderBottom: "1px solid #334155",
        paddingBottom: "16px",
        marginBottom: "20px",
      }}
    >
      <h2
        style={{
          margin: "0 0 6px 0",
          fontSize: "20px",
          color: "#38bdf8",
          fontWeight: 700,
        }}
      >
        New Portfolio Inquiry
      </h2>
      <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8" }}>
        Received from your portfolio contact form
      </p>
    </div>

    <div style={{ marginBottom: "16px" }}>
      <div
        style={{
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "#94a3b8",
          marginBottom: "4px",
        }}
      >
        Sender Name
      </div>
      <div style={{ fontSize: "16px", fontWeight: 600, color: "#ffffff" }}>
        {fullName}
      </div>
    </div>

    <div style={{ marginBottom: "20px" }}>
      <div
        style={{
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "#94a3b8",
          marginBottom: "4px",
        }}
      >
        Reply-To Email
      </div>
      <a
        href={`mailto:${email}`}
        style={{ fontSize: "15px", color: "#38bdf8", textDecoration: "underline" }}
      >
        {email}
      </a>
    </div>

    <div
      style={{
        backgroundColor: "#1e293b",
        padding: "16px 20px",
        borderRadius: "8px",
        border: "1px solid #334155",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "#94a3b8",
          marginBottom: "8px",
        }}
      >
        Message
      </div>
      <p
        style={{
          margin: 0,
          fontSize: "15px",
          lineHeight: "1.6",
          color: "#e2e8f0",
          whiteSpace: "pre-wrap",
        }}
      >
        {message}
      </p>
    </div>

    <div
      style={{
        marginTop: "24px",
        paddingTop: "16px",
        borderTop: "1px solid #1e293b",
        fontSize: "12px",
        color: "#64748b",
        textAlign: "center",
      }}
    >
      You can directly reply to this email to respond to {fullName} ({email}).
    </div>
  </div>
);

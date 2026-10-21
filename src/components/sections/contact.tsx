"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Contact Form</CardTitle>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                Reach out directly via email at{" "}
                <a
                  target="_blank"
                  href={`mailto:${config.email}`}
                  className="font-semibold text-primary underline cursor-can-hover"
                >
                  {config.email}
                </a>
                , phone at{" "}
                <a
                  href={`tel:${config.phone}`}
                  className="font-semibold text-primary underline cursor-can-hover"
                >
                  {config.phone}
                </a>
                , or connect on{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={config.social.linkedin}
                  className="font-semibold text-primary underline cursor-can-hover"
                >
                  LinkedIn
                </a>
                {", "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={config.social.instagram}
                  className="font-semibold text-primary underline cursor-can-hover"
                >
                  Instagram
                </a>
                {", or "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={config.social.youtube}
                  className="font-semibold text-primary underline cursor-can-hover"
                >
                  YouTube
                </a>{" "}
                (Indore, India).
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;

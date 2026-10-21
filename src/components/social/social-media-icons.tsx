"use client";

import React from "react";
import { Button } from "../ui/button";
import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const SocialMediaButtons = () => {
  const BUTTONS = [
    {
      name: "Instagram",
      href: config.social.instagram,
      icon: <SiInstagram size={20} className="text-foreground" />,
    },
    {
      name: "LinkedIn",
      href: config.social.linkedin,
      icon: <SiLinkedin size={20} className="text-foreground" />,
    },
    {
      name: "YouTube",
      href: config.social.youtube,
      icon: <SiYoutube size={20} className="text-foreground" />,
    },
  ];

  return (
    <div className="z-10 flex items-center">
      {BUTTONS.map((button) => (
        <Link href={button.href} key={button.name} target="_blank">
          <Button variant={"ghost"}>{button.icon}</Button>
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaButtons;

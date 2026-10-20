"use client";

import React from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={20} className="text-foreground" />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={20} className="text-foreground" />,
  },
  {
    name: "Twitter",
    href: config.social.twitter,
    icon: <SiX size={20} className="text-foreground" />,
  },
  {
    name: "Instagram",
    href: config.social.instagram,
    icon: <SiInstagram size={20} className="text-foreground" />,
  },
];

const SocialMediaButtons = () => {
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

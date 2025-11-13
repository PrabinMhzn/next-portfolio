import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconBrandLinkedin,
  IconDownload,
  IconMail,
} from "@tabler/icons-react";

export function SocialFloatingDock() {
  const links = [
    {
      title: "Linked In",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-200 hover: dark:text-lime-300" />
      ),
      href: "https://www.linkedin.com/in/prabin-maharjan93/",
    },

    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-200 dark:text-lime-300" />
      ),
      href: "https://github.com/PrabinMhzn",
    },
    {
      title: "Resume",
      icon: (
        <IconDownload className="h-full w-full text-neutral-200 dark:text-lime-300" />
      ),
      href: "/Resume.pdf",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-200 dark:text-lime-300" />
      ),
      href: "mailto:foo.gmail.com",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-200 dark:text-lime-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex justify-center  w-full mt-8 sm:mt-4 ">
      <FloatingDock items={links} />
    </div>
  );
}

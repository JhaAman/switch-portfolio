import React, { ReactNode, useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";

import {
  HomeIcon,
  SunIcon,
  MoonIcon,
  NewspaperIcon,
  InboxInIcon,
  VolumeUpIcon,
} from "@heroicons/react/outline";
import Icon from "@mdi/react";
import { ExternalLink } from "./Common";
import { mdiTwitter, mdiFruitWatermelon, mdiGithub } from "@mdi/js";
import { useTheme } from "next-themes";

type NavObj = {
  href: string;
  text: string;
  icon: ReactNode;
  action?: () => void;
};

type Props = {};

export default function NavBar({}: Props) {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const [items] = React.useState([
    {
      href: "/",
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      href: "https://twitter.com/amanjha__",
      text: "Twitter",
      icon: <Icon path={mdiTwitter} />,
    },
    {
      href: "https://github.com/JhaAman",
      text: "Github",
      icon: <Icon path={mdiGithub} />,
    },
    {
      href: "mailto:hey@amanjha.dev",
      text: "Email",
      icon: <InboxInIcon />,
    },
    {
      href: "",
      text: "Dark Mode",
      icon: <MoonIcon />,
      action: () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        console.log("changed theme");
      },
    },
    {
      href: "",
      text: "Volume",
      icon: <VolumeUpIcon />,
    },
  ]);

  return (
    <div className="flex items-center justify-center gap-4">
      {items.map((obj, idx) => (
        <NavItem key={idx} {...obj} />
      ))}
    </div>
  );
}

const NavItem = ({ href, text, icon, action }: NavObj) => {
  const router = useRouter();

  // Should we use Link or ExternalLink?
  const startsWith = (string: string, prefix: string) =>
    string.indexOf(prefix) === 0;

  const type = () => {
    if (startsWith(href, "http") || startsWith(href, "mailto:")) {
      return "external";
    }
    if (action) {
      return "action";
    }
    return "route";
  };

  const isActive = router.asPath === href;

  return (
    <button
      className={cn(
        isActive
          ? " text-gray-800 dark:text-gray-200"
          : " text-gray-700 dark:text-gray-300",
        " w-14 h-14 p-3 bg-gray-500 rounded-full"
      )}
      onClick={action ? action : () => {}}
    >
      {type() === "route" && (
        <Link href={href} passHref>
          {icon}
        </Link>
      )}
      {type() === "external" && <ExternalLink href={href}>{icon}</ExternalLink>}
      {type() === "action" && icon}
    </button>
  );
};

// className={cn(
//   isActive
//     ? "font-semibold text-gray-800 dark:text-gray-200"
//     : "font-normal text-gray-600 dark:text-gray-400",
//   "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
// )}

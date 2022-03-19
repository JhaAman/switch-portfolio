import React, { ReactNode } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";

import { HomeIcon } from "@heroicons/react/outline";
import Icon from "@mdi/react";
import { mdiTwitter } from "@mdi/js";
import { ExternalLink } from "./Common";

const NavObjs = [
  {
    href: "/tangie",
    text: "Tangie",
    icon: <HomeIcon />,
  },
  {
    href: "/",
    text: "Home",
    icon: <HomeIcon />,
  },
  {
    href: "/everlasting",
    text: "Everlasting Day",
    icon: <HomeIcon />,
  },
  {
    href: "/blog",
    text: "Blog",
    icon: <HomeIcon />,
  },
  {
    href: "https://twitter.com/amanjha__",
    text: "Twitter",
    icon: <Icon path={mdiTwitter} />,
  },
  {
    href: "/",
    text: "Home",
    icon: <HomeIcon />,
  },
  {
    href: "/",
    text: "Home",
    icon: <HomeIcon />,
  },
  {
    href: "/",
    text: "Home",
    icon: <HomeIcon />,
  },
];

type Props = {};

export default function NavBar({}: Props) {
  const [items, setItems] = React.useState(NavObjs);

  return (
    <div className="flex items-center justify-center gap-4">
      {/* <NavItem href="/" text="text" /> */}
      {NavObjs.map((obj) => (
        <NavItem key={obj.href} {...obj} />
      ))}
    </div>
  );
}

const NavItem = ({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: ReactNode;
}) => {
  const router = useRouter();

  // Should we use Link or ExternalLink?
  const startsWith = (string: string, prefix: string) =>
    string.indexOf(prefix) === 0;

  const hasHttp = (str: string) =>
    startsWith(str, "https://") || startsWith(str, "http://");

  const isActive = !hasHttp(href) && router.asPath === href;

  return (
    <button
      className={cn(
        isActive
          ? "selected font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 dark:text-gray-400",
        " w-14 h-14 p-2 bg-gray-500 rounded-full"
      )}
    >
      {/* // className="w-12 h-12 p-2 bg-gray-500 rounded-full"> */}
      {hasHttp(href) && <ExternalLink href={href}>{icon}</ExternalLink>}
      {!hasHttp(href) && (
        <Link href={href} passHref>
          {icon}
        </Link>
      )}
    </button>
  );
};

// className={cn(
//   isActive
//     ? "font-semibold text-gray-800 dark:text-gray-200"
//     : "font-normal text-gray-600 dark:text-gray-400",
//   "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
// )}

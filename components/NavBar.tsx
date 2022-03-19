import React, { ReactNode } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";

import { HomeIcon } from "@heroicons/react/outline";

const NavObjs = [
  {
    href: "/",
    text: "Home",
    icon: <HomeIcon />,
  },
  {
    href: "/about",
    text: "About",
    icon: <HomeIcon />,
  },
];

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="flex items-center justify-center gap-3">
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
  const isActive = router.asPath === href;

  return (
    <button className="w-12 h-12 p-2 bg-gray-500 rounded-full">
      <Link href={href} passHref>
        {/* <Image
          alt="Aman Jha"
          height={50}
          width={50}
          src="/static/images/profile.jpg"
          className="rounded-full"
        /> */}
        <HomeIcon className="w-full h-full" />
      </Link>
    </button>
  );
};

// className={cn(
//   isActive
//     ? "font-semibold text-gray-800 dark:text-gray-200"
//     : "font-normal text-gray-600 dark:text-gray-400",
//   "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
// )}

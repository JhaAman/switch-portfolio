import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";
type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="flex items-center justify-center">
      <button>
        <Image
          alt="Aman Jha"
          height={50}
          width={50}
          src="/static/images/profile.jpg"
          className="rounded-full"
        />
      </button>
    </div>
  );
}

const NavItem = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
};

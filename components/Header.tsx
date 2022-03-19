import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import cn from "classnames";
import ThemeButton from "./ThemeButton";

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
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
    </NextLink>
  );
}

export default function Header({}: {}) {
  return (
    <nav className="relative flex items-start justify-between w-full px-40 pt-20 pb-8 text-gray-900 border-gray-200 dark:border-gray-700 sm:pb-16 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>

      <div className="flex items-center">
        <Image
          alt="Aman Jha"
          height={50}
          width={50}
          src="/static/images/profile.jpg"
          className="rounded-full"
        />
      </div>

      <div className="">
        {/* <MobileMenu /> */}
        {/* <NavItem href="/guestbook" text="Guestbook" /> */}

        <div className="flex flex-col items-center justify-center text-black dark:text-white">
          <h1 className="text-4xl ">Aman</h1>
          <h2 className="lowercase">Founder. Designer. Everlasting.</h2>
        </div>
      </div>

      <div>
        <h1>San Francisco</h1>
      </div>
    </nav>
  );
}

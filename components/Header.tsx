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
    <nav className="relative flex items-center justify-between w-full pt-20 pb-8 mx-40 text-gray-900 border-gray-200 max-w-screen-2xl dark:border-gray-700 sm:pb-16 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>

      <div className="flex items-center">
        <Image
          alt="Aman Jha"
          height={50}
          width={50}
          src="/avatar.jpg"
          className="rounded-full"
        />
      </div>

      <div className="">
        {/* <MobileMenu /> */}
        {/* <NavItem href="/guestbook" text="Guestbook" /> */}

        <div className="flex flex-col items-center justify-center text-black dark:text-white">
          <h1 className="pb-2 font-sans text-4xl font-aperc">Aman</h1>
          <h2 className="">Founder. Designer. Everlasting.</h2>
        </div>
      </div>

      <div>
        <h1></h1>
      </div>
    </nav>
  );
}

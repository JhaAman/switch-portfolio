import React from "react";
import Image from "next/image";

export default function TitleBar({}: {}) {
  return (
    <nav className="relative flex flex-col items-center justify-between w-full px-40 pt-20 pb-8 text-gray-900 border-gray-200 sm:items-start sm:flex-row dark:border-gray-700 sm:pb-16 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>

      <div className="flex items-center pb-4 sm:pb-0 w-14">
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

      <div className="hidden w-20 md:flex">
        <h1 className="mx-2 whitespace-nowrap">San Francisco</h1>
      </div>
    </nav>
  );
}

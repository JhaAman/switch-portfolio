import Link from "next/link";

// import NowPlaying from "components/NowPlaying";
import { ExternalLink } from "./Common";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full px-20 mx-auto mb-8 text-sm ">
      <hr className="w-full mb-8 border-t border-gray-600 dark:border-gray-400" />

      <div className="flex justify-between w-full px-10">
        <h3 className="text-gray-400 uppercase ">AMAN JHA © 2022</h3>
        <div className="flex justify-end ">
          <div className="flex items-center mr-3">
            <p className="text-xs px-3  mx-1.5 py-0.5 text-gray-800 bg-gray-200 rounded-full">
              Enter
            </p>

            <h4 className="">Select</h4>
          </div>

          <hr className="w-1 h-full pr-1 border-t-0 border-l border-gray-400 dark:border-gray-600" />

          <div className="flex items-center ">
            <p className="px-3 text-xs mx-1.5 py-0.5 text-gray-800 bg-gray-200 rounded-full">
              Arrow Keys
            </p>

            <h4 className="">Navigate</h4>
          </div>
        </div>
      </div>
      {/* <NowPlaying /> */}
      {/* <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 transition hover:text-gray-600">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 transition hover:text-gray-600">
              About
            </a>
          </Link>
          <Link href="/newsletter">
            <a className="text-gray-500 transition hover:text-gray-600">
              Newsletter
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/leeerob">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/leerob">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 transition hover:text-gray-600">Uses</a>
          </Link>
          <Link href="/guestbook">
            <a className="text-gray-500 transition hover:text-gray-600">
              Guestbook
            </a>
          </Link>
          <Link href="/snippets">
            <a className="text-gray-500 transition hover:text-gray-600">
              Snippets
            </a>
          </Link>
          <Link href="/tweets">
            <a className="text-gray-500 transition hover:text-gray-600">
              Tweets
            </a>
          </Link>
        </div>
      </div> */}
    </footer>
  );
}

import Link from "next/link";

enum NavigationLinks {
  HOME = "/",
  BLOG = "blog",
  ABOUT = "about",
  CONTACT = "contact",
}

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6">
        <svg
          width="35"
          height="35"
          viewBox="0 0 462 392"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2_9)">
            <path
              d="M282.11 276.77L291.5 291.4C275.44 324.99 248.38 352.09 214.81 368.19C190.4 379.87 164.12 387.12 137.18 389.6C126.16 390.76 115.08 391.33 103.99 391.31H0V92.47H78.82V323.11H106.77C116.96 323.16 127.14 322.26 137.16 320.44C172.29 313.92 199.15 295.38 214.56 265.09C224.07 246.42 233.93 227.99 233.93 200.42C233.93 199.92 233.93 199.42 233.91 198.94L282.11 276.78V276.77Z"
              fill="#F05924"
            />
            <path
              d="M461.95 0V391.3H383.69L302.07 263.97L239.51 160.89C239.21 160.34 238.94 159.78 238.62 159.16C230.71 145.35 221.96 132.03 212.42 119.29C204.66 108.94 195.47 99.75 185.11 92L179.86 88.33C167.84 80.54 154.48 75.06 140.45 72.16C139.38 71.92 138.29 71.71 137.16 71.5C129.34 70.02 121.41 69.14 113.46 68.87C111.26 68.8 109.02 68.75 106.78 68.75H0V0H103.98C107.18 0 110.33 0.05 113.46 0.14C121.56 0.38 129.46 0.91 137.16 1.75C202.78 8.86 252.8 37.57 282.06 83.85L282.15 84.02L291.09 100.04L384.26 267.2V0H461.95Z"
              fill="#0E1419"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_9">
              <rect width="461.95" height="391.3" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <nav className="hidden sm:block">
          <ul className="flex gap-10">
            <Link href={NavigationLinks.HOME}>Home</Link>
            <Link href={NavigationLinks.BLOG}>Blog</Link>
            <Link href={NavigationLinks.ABOUT}>About</Link>
            <Link href={NavigationLinks.CONTACT}>Contact</Link>
          </ul>
        </nav>
      </div>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Code to learn...
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            There is some additional information about this site. Try to figure
            something later on this one.
          </p>
        </div>
      </div>
    </>
  );
}

import localFont from "@next/font/local";

const geomanistRegular = localFont({
  src: "./geomanist-regular-webfont.woff2",
  variable: "--font-geomanist",
  weight: "400",
  style: "normal",
});

const geomanistMedium = localFont({
  src: "./geomanist-medium-webfont.woff2",
  variable: "--font-geomanist",
  weight: "500",
  style: "normal",
});

const geomanistBold = localFont({
  src: "./geomanist-bold-webfont.woff2",
  variable: "--font-geomanist",
  weight: "700",
  style: "normal",
});

export { geomanistRegular, geomanistMedium, geomanistBold };

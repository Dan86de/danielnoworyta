import { Analytics } from "@vercel/analytics/react";
import { type Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

const baseUrl =
	process.env.NODE_ENV === "development" ? "http://localhost.3000" : "https://danielnoworyta.com";

export const metadata: Metadata = {
	title: "Daniel Noworyta - FullStack Developer",
	description: "Daniel Noworyta - portfolio.",
	openGraph: {
		title: "Daniel Noworyta - FullStack Developer",
		description: "Daniel Noworyta - portfolio.",
		url: baseUrl,
		siteName: "Daniel Noworyta - FullStack Developer",
		images: [
			{
				url: `${baseUrl}/og_800_600.webp`,
				width: 800,
				height: 600,
				alt: "Programistafrontend - Daniel Noworyta",
			},
			{
				url: `${baseUrl}/og_1800_1600.webp`,
				width: 1800,
				height: 1600,
				alt: "Programistafrontend - Daniel Noworyta",
			},
		],
		locale: "pl",
		type: "website",
	},
};

const geomanist = localFont({
	src: [
		{
			path: "./fonts/geomanist/geomanist-regular-webfont.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/geomanist/geomanist-medium-webfont.woff2",
			weight: "600",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--font-geomanist",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl" className={cn(geomanist.variable)} suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}

import { Analytics } from "@vercel/analytics/react";
import { type Metadata } from "next";

import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="h-full scroll-smooth antialiased" lang="pl" suppressHydrationWarning>
			<body className="h-full w-screen">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					{children}
					<TailwindIndicator />
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}

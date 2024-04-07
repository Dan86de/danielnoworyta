import type { Metadata } from "next";

import { NewsletterForm } from "@/components/newsletter-form.tsx";
import { SectionWrapper } from "@/components/section.tsx";

const baseUrl =
	process.env.NODE_ENV === "development" ? "http://localhost.3000" : "https://danielnoworyta.com";

export const metadata: Metadata = {
	title: "Daniel Noworyta - Newsletter",
	description: "Newsletter z konkretnymi poradami dla programistów.",
	openGraph: {
		title: "Daniel Noworyta - Newsletter",
		description: "Daniel Noworyta - portfolio.",
		url: baseUrl,
		siteName: "Daniel Noworyta - FullStack Developer",
		images: [
			{
				url: `/OG_NEWSLETTER_1200_630.webp`,
				width: 1200,
				height: 1630,
				alt: "Daniel Noworyta - Newsletter",
			},
		],
		locale: "pl",
		type: "website",
	},
};

export default function NewsletterPage() {
	return (
		<SectionWrapper className={"flex items-center justify-center md:h-full portrait:pt-32"}>
			<div className="grid w-full gap-10 lg:grid-cols-2">
				<div className="text-lg">
					<h2 className="pb-4 text-2xl md:text-4xl">
						Newsletter <span className="font-semibold">Głowa Pełna Kodu</span>
					</h2>
					<p className="pb-4">
						Dlaczego powinieneś się zapisać?{" "}
						<span className="font-semibold underline">Co tydzień otrzymasz:</span>
					</p>
					<ul className="list-disc pl-4">
						<li>konkretną radę, która pomoże rozwinąć Twoją karierę w IT</li>
						<li>najciekawsze linki ze świata IT</li>
						<li>ciekawe narzędzie</li>
					</ul>
				</div>
				<NewsletterForm />
			</div>
		</SectionWrapper>
	);
}

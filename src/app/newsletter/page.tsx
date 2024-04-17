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
					<p className="pb-4 underline">Dlaczego powinieneś się zapisać? </p>
					<ul className="list-disc pl-4">
						<li>pokażę Ci jak uczyłem się programowania na własną rękę</li>
						<li>pokażę Ci jak zmienić branżę tak, by nie ucierpiały Twoje finanse</li>
						<li>przedstawię Ci serię wyzwań, które pomogą Ci zostać programistą</li>
					</ul>
					<p className={"pt-4 text-center"}>
						Wszystko to{" "}
						<span className={"font-semibold underline"}>
							bez motywacyjnego bełkotu i lania wody
						</span>
						. Konkrety, które sam chciałem dostać na początku.
					</p>
				</div>

				<NewsletterForm />
			</div>
		</SectionWrapper>
	);
}

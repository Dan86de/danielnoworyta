import { compareDesc } from "date-fns";

import { NewsletterCard } from "@/components/newsletter-card";
import { SectionWrapper } from "@/components/section";
import { allNewsletters } from "contentlayer/generated";

export default function NewsletterPage() {
	const newsletters = allNewsletters
		.filter((newsletter) => newsletter.isReady)
		.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

	return (
		<SectionWrapper className="mx-0">
			{newsletters.map((newsletter, idx) => (
				<NewsletterCard key={idx} {...newsletter} />
			))}
		</SectionWrapper>
	);
}

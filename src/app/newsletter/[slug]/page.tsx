import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import { NewsletterForm } from "@/components/newsletter-form";
import { SectionWrapper, SectionWrapperRounded } from "@/components/section";
import { allNewsletters } from "contentlayer/generated";

export default function Page({ params }: { params: { slug: string } }) {
	const newsletter = allNewsletters.find((newsletter) => newsletter.slug === params.slug);

	if (!newsletter) notFound();

	const MDXContent = useMDXComponent(newsletter.body.code);

	return (
		<>
			<SectionWrapperRounded className="mx-auto max-w-3xl">
				<div className="text-lg">
					<h2 className="text-2xl md:text-4xl">Nie jesteś subskrybentem?</h2>
					<p>
						Dołącz do ponad 600 zapisanych osób i czerp korzyści z cotygodniowej dawki wiedzy i
						motywacji.
					</p>
				</div>
				<NewsletterForm />
			</SectionWrapperRounded>
			<SectionWrapper>
				<article className="prose prose-zinc mx-auto dark:prose-invert lg:prose-lg">
					<MDXContent />
				</article>
			</SectionWrapper>
		</>
	);
}

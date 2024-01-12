import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import { SectionWrapper } from "@/components/section";
import { allNewsletters } from "contentlayer/generated";

export default function Page({ params }: { params: { slug: string } }) {
	const newsletter = allNewsletters.find((newsletter) => newsletter.slug === params.slug);

	if (!newsletter) notFound();

	const MDXContent = useMDXComponent(newsletter.body.code);

	return (
		<>
			<SectionWrapper className="mt-4">
				<article className="prose prose-zinc mx-auto dark:prose-invert lg:prose-lg">
					<MDXContent />
				</article>
			</SectionWrapper>
		</>
	);
}

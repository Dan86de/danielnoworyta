import { NewsletterForm } from "@/components/newsletter-form";
import { SectionWrapper } from "@/components/section";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
	// Create any shared layout or styles here
	return (
		<SectionWrapper>
			<article className="prose prose-zinc lg:prose-xl dark:prose-invert mx-auto">
				{children}

				<NewsletterForm />
			</article>
		</SectionWrapper>
	);
}

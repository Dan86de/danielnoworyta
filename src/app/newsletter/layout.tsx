import { NewsletterForm } from "@/components/newsletter-form";
import { SectionWrapper, SectionWrapperRounded } from "@/components/section";

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
	return (
		<SectionWrapper className="pt-24">
			{children}

			<SectionWrapperRounded>
				<div className="text-lg">
					<h2 className="text-2xl md:text-4xl">Zapis na Newsletter</h2>
				</div>
				<NewsletterForm />
			</SectionWrapperRounded>
		</SectionWrapper>
	);
}

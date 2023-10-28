import { HeroSection } from "@/components/hero";
import { NewsletterForm } from "@/components/newsletter-form";
import { SectionWrapperRounded } from "@/components/section";

export default function Home() {
	return (
		<>
			<HeroSection />
			<SectionWrapperRounded>
				<div className="grid w-full gap-10 xl:grid-cols-2">
					<div className="text-lg">
						<h2 className="pb-4 text-2xl md:text-4xl">
							Newsletter <span className="font-bold">Programistafrontend</span>
						</h2>
						<p className="pb-4">Dlaczego powinieneś się zapisać?</p>
						<ul className="list-disc pl-4">
							<li>co tydzień dostaniesz mięsisty email o tym jak zostać programistą</li>
							<li>pokażę Ci jak uczyłem się programowania na własną rękę</li>
							<li>pokażę Ci jak zmienić branżę tak, by nie ucierpiały Twoje finanse</li>
							<li>przedstawię Ci serię wyzwań, które pomogą Ci zostać programistą</li>
						</ul>
					</div>
					<NewsletterForm />
				</div>
			</SectionWrapperRounded>
		</>
	);
}

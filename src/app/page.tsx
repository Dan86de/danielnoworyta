import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { NewsletterLanding } from "@/components/newsletter-landing";

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<NewsletterLanding />
		</>
	);
}

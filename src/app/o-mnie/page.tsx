import { AboutSection } from "@/components/about-section.tsx";
import { SectionWrapper } from "@/components/section.tsx";

export default function AboutPage() {
	return (
		<SectionWrapper className={"flex items-center justify-center md:h-full portrait:pt-24"}>
			<AboutSection />
		</SectionWrapper>
	);
}

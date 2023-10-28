import { HeroAvatar } from "./hero-avatar";
import { SectionWrapper } from "./section";

export const AboutSection = () => {
	return (
		<SectionWrapper>
			<div className="grid w-full grid-rows-2 gap-20 md:grid-cols-2 md:grid-rows-1">
				<section className="row-start-2 md:row-start-1">
					<h1>Cześć jestem Daniel</h1>
					<p>
						Przez 10 lat byłem inżynierem w branży samochodowej. Projektowałem samochody i
						pracowałem dla takich marek jak Volkswagen, Porsche czy Volvo. Jednak coś ciągle mówiło
						mi, że to nie jest to.
					</p>
				</section>
				<section className="row-start-1 w-full md:row-start-1">
					<HeroAvatar />
				</section>
			</div>
		</SectionWrapper>
	);
};

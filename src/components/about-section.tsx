import { HeroAvatar } from "./hero-avatar";
import { SectionWrapper } from "./section";

export const AboutSection = () => {
	return (
		<SectionWrapper className="mx-auto max-w-6xl">
			<div className="w-full space-y-10 py-8 md:grid md:grid-cols-2 md:gap-10">
				<section className="my-auto">
					<HeroAvatar />
				</section>
				<section className="">
					<h1 className="pb-4 text-2xl md:text-4xl">Cześć, jestem Daniel</h1>
					<p>
						Przez 10 lat udawałem że jestem zadowolony z pracy. Projektowałem samochody i pracowałem
						dla takich marek jak Volkswagen, Porsche czy Volvo. Jednak coś ciągle mówiło mi, że to
						nie jest to.
					</p>
					<br />
					<p>
						Z bagażem doświadczeń, rodziną i 30 na karku postanowiłem coś zmienić. Postanowiłem, że
						zostanę frontend web developerem. Zacząłem wstawać codziennie o 5 rano, by uczyć się
						programowania na własną rękę.
					</p>
					<br />
					<p>
						Przeszedłem transformację z inżyniera w branży samochodowej na full stack dewelopera.
						Udokumentowałem mój proces, przeanalizowałem moje błędy i teraz pomagam osobom, takim
						jak Ty, przejść gładko ten proces.
					</p>
				</section>
			</div>
		</SectionWrapper>
	);
};

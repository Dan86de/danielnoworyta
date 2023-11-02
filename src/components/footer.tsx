import { SectionWrapper } from "./section";

export const Footer = () => {
	return (
		<div className="pt-8">
			<div className="relative bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)] py-16 lg:px-8 lg:py-16">
				<div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
				<footer>
					<SectionWrapper>
						<p className="text-right">
							© 2023 Daniel Noworyta.{" "}
							<span className="hidden md:inline">Wszelkie prawa zastrzeżone.</span>
						</p>
					</SectionWrapper>
				</footer>
			</div>
		</div>
	);
};

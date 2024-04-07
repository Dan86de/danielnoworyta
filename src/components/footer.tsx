import Link from "next/link";

import { SectionWrapper } from "./section";

export const Footer = () => {
	return (
		<div className="pt-8">
			<div className="relative bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)] py-16 lg:px-8 lg:py-16">
				<div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
				<footer>
					<SectionWrapper className={"flex w-full flex-col justify-center"}>
						<div className={"grid grid-cols-1 space-y-4 md:grid-cols-2"}>
							<p className={"text-center md:text-left"}>
								© 2023 Daniel Noworyta.{" "}
								<span className="hidden md:inline">Wszelkie prawa zastrzeżone.</span>
							</p>
							<div className={"flex flex-col justify-end text-center md:items-end"}>
								<Link
									href={{ pathname: "/sklep/regulamin-serwisu" }}
									className={"block rounded-sm outline-none ring-ring focus:ring-[1.5px]"}
								>
									Regulamin serwisu
								</Link>
								<Link
									href={{ pathname: "/sklep/regulamin" }}
									className={"block rounded-sm outline-none ring-ring focus:ring-[1.5px]"}
								>
									Regulamin sklepu
								</Link>
								<Link
									href={{ pathname: "/sklep/polityka-prywatnosci" }}
									className={"block rounded-sm outline-none ring-ring focus:ring-[1.5px]"}
								>
									Polityka prywatności
								</Link>
								<Link
									href={{ pathname: "/sklep/regulamin-newslettera" }}
									className={"block rounded-sm outline-none ring-ring focus:ring-[1.5px]"}
								>
									Regulamin newslettera
								</Link>
							</div>
						</div>
					</SectionWrapper>
				</footer>
			</div>
		</div>
	);
};

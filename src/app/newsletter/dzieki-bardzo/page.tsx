import Image from "next/image";

import { SectionWrapper } from "@/components/section.tsx";

export default function NewsletterAfterSignUpPage() {
	return (
		<SectionWrapper className="flex h-4/5 w-full items-center pt-40 xl:pt-60 2xl:pt-80">
			<main className="max-w-2xl">
				<h2 className="pb-4 text-2xl md:text-4xl">
					Potwierdziłeś/aś swój zapis na newsletter{" "}
					<span className="font-bold">Programistafrontend</span>
				</h2>
				<p className="pt-4">Witaj na pokładzie i do przeczytania wkrótce!</p>
				<Image
					src={"/signature.webp"}
					alt="podpis"
					width={200}
					height={100}
					className="ml-auto mr-4 aspect-video dark:hidden"
				/>
				<Image
					src={"/signature_dark_white.webp"}
					alt="podpis"
					width={200}
					height={100}
					className="ml-auto mr-4 hidden aspect-video dark:block"
				/>
			</main>
		</SectionWrapper>
	);
}

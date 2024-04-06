"use client";

import { NewsletterForm } from "@/components/newsletter-form.tsx";

import { GridPattern } from "./grid-pattern";
import { SectionWrapper } from "./section";

export const HeroSection = () => {
	return (
		<div className="relative inset-0 h-screen overflow-hidden bg-background">
			<GridPattern
				offsetX={0}
				offsetY={0}
				size={48}
				className={`absolute -inset-px h-full w-full stroke-zinc-950/10 stroke-[4] [mask-image:radial-gradient(#070A0D,transparent_70%)] [stroke-dasharray:5_6] [stroke-dashoffset:10] dark:stroke-zinc-50/10 dark:[mask-image:radial-gradient(#E5E7EB,transparent_70%)]`}
			/>

			<div className="flex h-full items-center justify-start">
				<SectionWrapper className={"pt-40 md:pt-0"}>
					<div className="grid w-full gap-10 lg:grid-cols-2">
						<div className="text-lg">
							<h2 className="pb-4 text-2xl md:text-4xl">
								Newsletter <span className="font-semibold">Programistafrontend</span>
							</h2>
							<p className="pb-4">
								Dlaczego powinieneś się zapisać?{" "}
								<span className="font-semibold underline">Co tydzień otrzymasz:</span>
							</p>
							<ul className="list-disc pl-4">
								<li>ciekawe narzędzie</li>
								<li>konkretną radę, która pomoże rozwinąć Twoją karierę w IT</li>
								<li>najciekawsze linki ze świata IT</li>
							</ul>
						</div>
						<NewsletterForm />
					</div>
				</SectionWrapper>
			</div>
		</div>
	);
};

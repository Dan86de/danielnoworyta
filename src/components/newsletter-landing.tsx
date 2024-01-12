import Link from "next/link";

import { NewsletterForm } from "./newsletter-form";
import { SectionWrapperRounded } from "./section";

export const NewsletterLanding = () => {
	return (
		<SectionWrapperRounded className="mx-auto max-w-6xl">
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

					<p className="pt-4">
						Przykładowe wydanie dostępne pod{" "}
						<Link
							href={`/newsletter/nie-poddawaj-sie-latwo`}
							className="rounded-sm font-semibold underline outline-none focus:ring focus:ring-brand"
						>
							tym
						</Link>{" "}
						linkiem.
					</p>
				</div>
				<NewsletterForm />
			</div>
		</SectionWrapperRounded>
	);
};

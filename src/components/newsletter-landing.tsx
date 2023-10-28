import { NewsletterForm } from "./newsletter-form";
import { SectionWrapperRounded } from "./section";

export const NewsletterLanding = () => {
	return (
		<SectionWrapperRounded>
			<div className="grid w-full gap-10 xl:grid-cols-2">
				<div className="text-lg">
					<h2 className="pb-4 text-2xl md:text-4xl">
						Newsletter <span className="font-semibold">Programistafrontend</span>
					</h2>
					<p className="pb-4">
						Dlaczego powinieneś się zapisać?{" "}
						<span className="font-semibold underline">Co tydzień otrzymasz:</span>
					</p>
					<ul className="list-disc pl-4">
						<li>konkretną radę, która pomoże rozwinąć Twoją karierę w IT</li>
						<li>ciekawe narzędzie, które możesz wdrożyć</li>
						<li>4 najciekawsze linki, na które ostatnio trafiłem.</li>
					</ul>

					<p className="pt-4">
						Przykładowe wydanie dostępne pod <span className="font-semibold underline">tym</span>{" "}
						linkiem.
					</p>
				</div>
				<NewsletterForm />
			</div>
		</SectionWrapperRounded>
	);
};

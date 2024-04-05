import Link from "next/link";

import { SectionWrapper } from "@/components/section";

export default function SiteRulesPage() {
	return (
		<SectionWrapper className="prose  prose-sm pt-24 text-sm dark:prose-invert">
			<h1>
				Warunki korzystania ze strony internetowej (DSA)
				<br />
				Sklep Daniel Noworyta
			</h1>

			<h2>Usługodawca</h2>
			<div>
				<p>
					Sklep internetowy&nbsp;Sklep DanielNoworyta, dostępny pod adresem
					https://danielnoworyta.pl/sklep jest prowadzony przez:
				</p>
				<p>
					Daniel Noworyta, przedsiębiorca prowadzący działalność gospodarczą pod firmą Daniel
					Noworyta, wpisany do Centralnej Ewidencji i Informacji o Działalności Gospodarczej
					prowadzonej przez ministra właściwego do spraw gospodarki i prowadzenia Centralnej
					Ewidencji i Informacji o Działalności Gospodarczej, NIP 6262908784, nr REGON 380674327,
					Armi Krajowej 7/30, Tarnowskie Góry 42-609{" "}
				</p>
			</div>

			<h2>Punkt kontaktowy</h2>
			<p>
				W celu kontaktowania się ze mną możesz skorzystać z następujących form komunikacji
				elektronicznej:
			</p>
			<ul>
				<li>poczta elektroniczna: sklep@danielnoworyta.pl</li>
			</ul>

			<h2>Język komunikacji</h2>
			<p>Możesz skontaktować się ze mną w języku polskim.</p>

			<h2>Rozpatrywanie skarg i reklamacji</h2>
			<p>
				Reklamacje i skargi dotyczące korzystania ze strony internetowej mogą być składane za
				pośrednictwem Punktu Kontaktowego, którego dane wskazane są na początku niniejszych
				warunków.
			</p>
			<p>Rozpatruję reklamacje i skargi w ciągu 14 dni od ich otrzymania.</p>
			<p>
				Szczegółowe procedury reklamacyjne określone zostały w pozostałych regulaminach. Odnośniki
				do regulaminów znajdują się na końcu tych warunków, w sekcji: &quot;Inne regulaminy i
				polityki&quot;.
			</p>

			<h2>Warunki techniczne</h2>
			<p>
				Dla prawidłowego korzystania ze strony internetowej konieczne jest spełnienie następujących
				warunków technicznych:
			</p>
			<ul>
				<li>aktywne konto e-mail,</li>
				<li>urządzenie z dostępem do Internetu,</li>
				<li>przeglądarka internetowa obsługująca JavaScript i pliki cookies.</li>
			</ul>

			<h2>Prywatność i dane osobowe</h2>
			<p>
				Zasady przetwarzania danych osobowych i wykorzystywania plików cookies wskazane są w
				polityce prywatności dostępnej pod adresem:
				https://danielnoworyta.pl/sklep/polityka-prywatnosci
			</p>

			<h2>Inne regulaminy i polityki</h2>
			<p>
				Do korzystania z mojej strony internetowej i dostępnych w jej ramach usług zastosowanie mają
				również:
			</p>
			<ul>
				<li>
					<Link href={{ pathname: "/sklep/regulamin" }} className={"text-brand"}>
						Regulamin sklepu - https://danielnoworyta.pl/sklep/regulamin
					</Link>
				</li>
				<li>
					<Link href={{ pathname: "/sklep/regulamin-newslettera" }} className={"text-brand"}>
						Regulamin newslettera - https://danielnoworyta.pl/sklep/regulamin-newslettera
					</Link>
				</li>
			</ul>
			<p>Te Warunki stanowią suplement do wskazanych wyżej dokumentów.</p>

			<section className={"text-center"}>
				<small>Warunki korzystania ze strony internetowej z dnia 05.04.2024.</small>
			</section>
		</SectionWrapper>
	);
}

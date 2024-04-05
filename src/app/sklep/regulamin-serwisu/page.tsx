import { SectionWrapper } from "@/components/section";

export default function SiteRulesPage() {
	return (
		<SectionWrapper className="pt-24">
			<>
				<style
					dangerouslySetInnerHTML={{
						__html:
							"\n\n        table {\n            width: 85%;\n            border-collapse: collapse;\n            margin-left: auto;\n            margin-right: auto;\n            font-family: sans-serif;\n        }\n\n        th {\n            border: 1px solid black;\n            padding: 8px;\n        }\n\n        tr {\n            border: 1px solid black;\n            padding-top: 10px;\n        }\n\n        td {\n            border: 1px solid black;\n            padding: 8px;\n        }\n\n        .h1 {\n            padding-top: 20px;\n            font-size: 20px;\n            line-height: 40px;\n        }\n\n        .left-column {\n            width: 15%;\n            text-align: center;\n            font-size: 60px;\n            vertical-align: top;\n            border: 1px solid black;\n            color: #F25118;\n            padding-top: 40px;\n        }\n\n\n        .right-column-title {\n            width: 85%;\n            text-align: center;\n            font-weight: bold;\n            text-transform: uppercase;\n            font-size: 16px;\n            background-color: #F25118;\n        }\n\n        .right-column {\n            width: 85%;\n            text-align: left;\n            line-height: 200%;\n            border: 1px solid black;\n            padding-bottom: 40px;\n        }\n\n\n    ",
					}}
				/>
				<table>
					<tbody>
						<tr>
							<th colSpan={2} className="h1">
								Warunki korzystania ze strony internetowej (DSA)
								<br />
								Sklep DanielNoworyta
							</th>
						</tr>
						<tr>
							<td className="right-column-title">Usługodawca</td>
						</tr>
						<tr>
							<td className="right-column">
								<p>
									Sklep internetowy&nbsp;Sklep DanielNoworyta, dostępny pod adresem
									https://danielnoworyta.pl/sklep jest prowadzony przez:
								</p>
								<p>
									Daniel Noworyta, przedsiębiorca prowadzący działalność gospodarczą pod firmą
									Daniel Noworyta, wpisany do Centralnej Ewidencji i Informacji o Działalności
									Gospodarczej prowadzonej przez ministra właściwego do spraw gospodarki i
									prowadzenia Centralnej Ewidencji i Informacji o Działalności Gospodarczej, NIP
									6262908784, nr REGON 380674327, Armi Krajowej 7/30, Tarnowskie Góry 42-609{" "}
								</p>
							</td>
						</tr>
						{/* Punkt Kontaktowy */}
						<tr>
							<td className="right-column-title">Punkt kontaktowy</td>
						</tr>
						<tr>
							<td className="right-column">
								<p>
									W celu kontaktowania się z nami możesz skorzystać z następujących form komunikacji
									elektronicznej:
								</p>
								<ul>
									<li>poczta elektroniczna: sklep@danielnoworyta.pl</li>
								</ul>
							</td>
						</tr>
						{/* J&#281;zyk komunikacji */}
						<tr>
							<td className="right-column-title">Język komunikacji</td>
						</tr>
						<tr>
							<td className="right-column">
								<p>Możesz skontaktować się z nami w języku polskim.</p>
							</td>
						</tr>
						{/* Rozpatrywanie skarg  */}
						<tr>
							<td className="right-column-title">Rozpatrywanie skarg i reklamacji</td>
						</tr>
						<tr>
							<td className="right-column">
								<p>
									Reklamacje i skargi dotyczące korzystania ze strony internetowej mogą być składane
									za pośrednictwem Punktu Kontaktowego, którego dane wskazane są na początku
									niniejszych warunków.
								</p>
								<p>Rozpatrujemy reklamacje i skargi w ciągu 14 dni od ich otrzymania.</p>
								<p>
									Szczegółowe procedury reklamacyjne określone zostały w pozostałych regulaminach.
									Odnośniki do regulaminów znajdują się na końcu tych warunków, w sekcji: "Inne
									regulaminy i polityki".
								</p>
							</td>
						</tr>
						{/* Warunki techniczne */}
						<tr>
							<td className="right-column-title">Warunki techniczne</td>
						</tr>
						<tr>
							<td className="right-column">
								<p>
									Dla prawidłowego korzystania ze strony internetowej konieczne jest spełnienie
									następujących warunków technicznych:
								</p>
								<ul>
									<li>aktywne konto e-mail,</li>
									<li>urządzenie z dostępem do Internetu,</li>
									<li>przeglądarka internetowa obsługująca JavaScript i pliki cookies.</li>
								</ul>
							</td>
						</tr>
						{/* Prywatno&#347;&#263; i dane osobowe */}
						<tr>
							<td className="right-column-title">Prywatność i dane osobowe</td>
						</tr>
						<tr>
							<td className="right-column">
								Zasady przetwarzania danych osobowych i wykorzystywania plików cookies wskazane są w
								polityce prywatności dostępnej pod adresem:
								https://danielnoworyta.pl/sklep/polityka-prywatnosci
							</td>
						</tr>
						{/* Inne regulaminy i polityki zwi&#261;zane z korzystaniem z [TYP_D]  */}
						<tr>
							<td className="right-column-title">Inne regulaminy i polityki</td>
						</tr>
						<tr>
							<td className="right-column">
								Do korzystania z naszej strony internetowej i dostępnych w jej ramach usług
								zastosowanie mają również:
								<ul>
									<li>Regulamin sklepu - https://danielnoworyta.pl/sklep/regulamin</li>
									<li>
										Regulamin newslettera - https://danielnoworyta.pl/sklep/regulamin-newslettera
									</li>
								</ul>
								<p>Te Warunki stanowią suplement do wskazanych wyżej dokumentów.</p>
							</td>
						</tr>
						<tr>
							<th colSpan={2}>
								<section style={{ marginBottom: "2em", textAlign: "center" }}>
									<small>
										Warunki korzystania ze strony internetowej z dnia 05.04.2024.
										<br />
										Numer licencji nadanej przez Kreator Legal Geek:{" "}
										<a
											href="https://kreator.legalgeek.pl/"
											target="_blank"
											style={{ textDecoration: "none", color: "inherit" }}
										>
											dccff938-8e94-41f9-80cb-9b24d61a7df8
										</a>
										.
									</small>
								</section>
							</th>
						</tr>
					</tbody>
				</table>
			</>
		</SectionWrapper>
	);
}

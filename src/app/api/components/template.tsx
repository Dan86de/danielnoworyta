import {
	Body,
	Column,
	Container,
	Heading,
	Html,
	Img,
	Link,
	Markdown,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";

const Email = ({ markdown, tldr }: { markdown: string; tldr: string[] }) => {
	console.log({ markdown, tldr });
	return (
		<Html>
			<Preview>Daniel Noworyta email - wydanie #3</Preview>

			<Body style={main}>
				<Container style={container}>
					<Section style={logoWithBg}>
						<Img width={146} src={`https://pliki.poprawnykod.pl/logo_top.webp`} />
					</Section>
					<Section style={header}>
						<Row>
							<Column style={headerContent}>
								<Heading style={headerContentTitle}>W tym wydaniu:</Heading>
							</Column>
						</Row>
						<Row>
							<ul style={headerList}>
								{tldr.map((item, index) => (
									<li key={index} style={headerListElement}>
										{item}
									</li>
								))}
							</ul>
						</Row>
					</Section>
				</Container>
				<Container style={container}>
					<Section style={{ padding: "12px" }}>
						<Text>{`Hej {{ subscriber.first_name }}!`}</Text>
						<Markdown
							markdownCustomStyles={{
								hr: { ...divider },
								link: { ...standardLink },
								h1: { margin: "0", fontSize: "1.074rem", fontWeight: "600" },
								h2: { margin: "0", fontSize: "1.728rem", fontWeight: "600" },
								h3: { margin: "0", fontSize: "1.44rem", fontWeight: "600" },
							}}
						>
							{markdown}
						</Markdown>
					</Section>
				</Container>
				<Section style={footer}>
					<hr style={divider} />

					<Img style={logoFooter} width={146} src={`https://pliki.poprawnykod.pl/logo_top.webp`} />
					<Text style={footerText}>
						Otrzymujesz tę wiadomość, bo jesteś częścią newslettera{" "}
						<strong>programistafrontend</strong>.
					</Text>

					<Link href="{{ unsubscribe_url }}" style={footerLink}>
						Wypisz się z listy
					</Link>
					<Link href="https://www.danielnoworyta.pl/sklep/regulamin-newslettera" style={footerLink}>
						Regulamin
					</Link>
					<Link href="https://danielnoworyta.pl" style={footerLink}>
						danielnoworyta.pl
					</Link>
					<Link href="https://www.danielnoworyta.pl/sklep/polityka-prywatnosci" style={footerLink}>
						Polityka prywatności
					</Link>
				</Section>
			</Body>
		</Html>
	);
};

export default Email;

const main = {
	backgroundColor: "#E5E5E5",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif",
	fontSize: "16px",
};

const divider = {
	margin: "24px 0",
	background: "linear-gradient(to right, #F25118, #F25118)",
	height: "1px",
	border: "none",
};

const headerListElement = {
	fontSize: "15px",
	lineHeight: "22px",
	margin: "0",
	color: "#FAFAFA",
};

const headerList = {
	color: "#FAFAFA",
	padding: "12px 24px",
	margin: "0",
};

const header = {
	borderRadius: "5px 5px 0 0",
	backgroundColor: "#000000",
	padding: "0 24px",
};

const headerContent = {};

const headerContentTitle = {
	color: "#FAFAFA",
	fontSize: "27px",
	fontWeight: "bold",
	lineHeight: "27px",
	paddingTop: "24px",
};

const container = {
	width: "680px",
	maxWidth: "100%",
	margin: "0 auto",
	backgroundColor: "#ffffff",
};

const footer = {
	width: "680px",
	maxWidth: "100%",
	margin: "0 auto",
	padding: "0 12px",
	paddingBottom: "30px",
};

const logoFooter = {
	display: "flex",
	justifyContent: "center",
	padding: "0",
	paddingBottom: "20px",
};

const logoWithBg = {
	display: "flex",
	justifyContent: "center",
	padding: "20px 0",
	backgroundColor: "#E5E5E5",
};

const footerText = {
	fontSize: "12px",
	lineHeight: "15px",
	color: "#9199a1",
	margin: "0",
};

const footerLink = {
	display: "inline-block",
	color: "#9199a1",
	textDecoration: "underline",
	fontSize: "12px",
	marginRight: "10px",
	marginBottom: "0",
	marginTop: "8px",
};

const standardLink = {
	display: "inline-block",
	color: "#F25118",
	textDecoration: "underline",
};

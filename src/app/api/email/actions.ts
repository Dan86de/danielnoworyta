"use server";

import { type EmailPageState } from "@/app/email/page.tsx";

export const handler = async (_prevState: EmailPageState, formData: FormData) => {
	const markdown = formData.get("markdown") as string;
	const tldr = formData.get("tldr") as string;
	const res = await fetch("https://danielnoworyta.pl/api/email", {
		method: "POST",
		body: JSON.stringify({
			markdown,
			tldr,
		}),
	});

	const response = (await res.json()) as { html: string };

	return {
		html: response.html,
	};
};

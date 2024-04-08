"use server";

import * as process from "process";

import { type EmailPageState } from "@/app/email/page.tsx";

const url =
	process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://danielnoworyta.pl";

export const handler = async (_prevState: EmailPageState, formData: FormData) => {
	const markdown = formData.get("markdown") as string;
	const tldr = formData.get("tldr") as string;
	const res = await fetch(`${url}/api/email`, {
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

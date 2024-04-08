"use client";

import { useFormState } from "react-dom";

import { handler } from "@/app/api/email/actions.ts";
import { SectionWrapper } from "@/components/section.tsx";

export type EmailPageState = {
	html: string;
};

const initialState = {
	html: "",
};

export default function EmailPage() {
	const [state, formAction] = useFormState(handler, initialState);

	return (
		<>
			<SectionWrapper className="flex h-4/5 w-full flex-col items-start justify-between pt-24">
				<h1 className="pb-4 text-2xl md:text-4xl">Email generator</h1>
				<form action={formAction} className={"flex w-full flex-col gap-4"}>
					<textarea name="markdown" id="markdown" rows={10} />
					<textarea name="tldr" id="tldr" rows={3} />
					<button type={"submit"}>Generate</button>
				</form>
			</SectionWrapper>
			<pre className={"select-all"}>{state.html}</pre>
		</>
	);
}

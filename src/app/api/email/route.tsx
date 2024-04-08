import { render } from "@react-email/render";

import Email from "@/app/api/components/template.tsx";

export async function POST(request: Request) {
	const body = (await request.json()) as { markdown: string; tldr: string };
	const { markdown, tldr } = body;
	const html = render(<Email markdown={markdown} tldr={tldr} />, {
		pretty: true,
	});

	return new Response(JSON.stringify({ html }));
}

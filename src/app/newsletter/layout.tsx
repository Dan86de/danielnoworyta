import { type ReactNode } from "react";

import { SectionWrapper } from "@/components/section";

export default function NewsletterLayout({ children }: { children: ReactNode }) {
	return <SectionWrapper className="pt-24">{children}</SectionWrapper>;
}

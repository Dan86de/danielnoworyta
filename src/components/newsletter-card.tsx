import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";
import Link from "next/link";

import { type Newsletter } from "contentlayer/generated";

export const NewsletterCard = (newsletter: Newsletter) => {
	return (
		<Link href={`/newsletter/${newsletter.slug}`} className="group">
			<div className="py-4 ">
				<h2 className="text-xl group-hover:text-brand">{newsletter.title}</h2>
				<time dateTime={newsletter.publishedAt} className="mb-2 block text-xs text-gray-600">
					{format(parseISO(newsletter.publishedAt), "dd MMMM yyyy", { locale: pl })}
				</time>
				<div
					className="text-sm font-light  [&>*:last-child]:mb-0 [&>*]:mb-3"
					dangerouslySetInnerHTML={{ __html: newsletter.summary }}
				/>
			</div>
		</Link>
	);
};

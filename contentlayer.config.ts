// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Newsletter = defineDocumentType(() => ({
	name: "Newsletter",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		publishedAt: { type: "string", required: true },
		summary: { type: "string", required: true },
		isReady: { type: "boolean", required: true },
	},
	computedFields: {
		slug: {
			type: "string",
			resolve: (doc) => doc._raw.flattenedPath,
		},
	},
}));

// eslint-disable-next-line import/no-default-export
export default makeSource({ contentDirPath: "newsletter", documentTypes: [Newsletter] });

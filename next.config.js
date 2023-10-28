const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "dsc.cloud",
				port: "",
				pathname: "/88160a/**",
			},
		],
	},
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	experimental: {
		typedRoutes: true,
	},
};

module.exports = withMDX(nextConfig);

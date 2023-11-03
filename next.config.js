const { withContentlayer } = require("next-contentlayer");

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
			{
				protocol: "https",
				hostname: "i.ytimg.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	experimental: {
		typedRoutes: true,
	},
};

module.exports = withContentlayer(nextConfig);

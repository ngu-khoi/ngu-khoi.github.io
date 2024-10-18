/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	assetPrefix:
		process.env.NODE_ENV === "production" ? "/ngu-khoi.github.io" : "",
	basePath:
		process.env.NODE_ENV === "production" ? "/ngu-khoi.github.io" : "",
}

module.exports = nextConfig

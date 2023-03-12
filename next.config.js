const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")

module.exports = ({
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "http://khaichuen.pythonanywhere.com/:path*"
			},
			{
				source: "/static/:path*",
				destination: "http://yapkhaichuen.pythonanywhere.com/static/:path*"
			}
		]
	},
	pwa: {
		dest: "public",
		runtimeCaching,
		disable: process.env.NODE_ENV === "development"
	},
})

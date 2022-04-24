import "../styles/globals.css"
import Head from "next/head"

function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
				<meta name="description" content="Description" />
				<meta name="keywords" content="Keywords" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#f9fafb" />
				<link rel="apple-touch-icon" href="/icons/apple.png" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp

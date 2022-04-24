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
				<meta name="theme-color" content="#f9fafb" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<link rel="manifest" href="/manifest.json" />

				<link rel="apple-touch-icon" href="/icons/apple.png" />
				<link
					href="/splashscreens/iphone5_splash.png"
					media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="/splashscreens/iphone6_splash.png"
					media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="/splashscreens/iphoneplus_splash.png"
					media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="/splashscreens/iphonex_splash.png"
					media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="/splashscreens/iphonexr_splash.png"
					media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="/splashscreens/iphonexsmax_splash.png"
					media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="/splashscreens/ipad_splash.png"
					media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="/splashscreens/ipadpro1_splash.png"
					media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="/splashscreens/ipadpro3_splash.png"
					media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="/splashscreens/ipadpro2_splash.png"
					media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp

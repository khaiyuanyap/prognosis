import {useRouter} from "next/router"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function home() {
	const router = useRouter()
	return (
		<div className="min-h-screen bg-gray-50">
			<Head>
				<title>Home Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="mx-8 py-5">
				<h1 className="mb-8 text-2xl font-semibold">Home Page</h1>
				<div className="inset-0 flex items-center justify-center md:absolute">
					<div className="grid grid-cols-3 justify-items-center gap-4 lg:grid-cols-6">
						<Link href="/cardiac" passHref>
							<a className="my-4 h-20 w-20 cursor-pointer space-y-2 rounded-lg border bg-white p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
								<div>
									<Image
										src="/images/cardiac.png"
										width={200}
										height={200}
										draggable={false}
									/>
								</div>
								<p className="text-center text-[.70rem] font-semibold">
									Cardiac Health
								</p>
							</a>
						</Link>

						<Link href="/melanoma" passHref>
							<a className="my-4 h-20 w-20 cursor-pointer space-y-2 rounded-lg border bg-white p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
								<div>
									<Image
										src="/images/skins.png"
										width={200}
										height={200}
										draggable={false}
									/>
								</div>
								<p className="text-center text-[.70rem] font-semibold">
									Skin Cancer
								</p>
							</a>
						</Link>

						<Link href="/diabetes" passHref>
							<a className="my-4 h-20 w-20 cursor-pointer space-y-2 rounded-lg border bg-white p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
								<div>
									<Image
										src="/images/diabetes.png"
										width={200}
										height={200}
										draggable={false}
									/>
								</div>
								<p className="text-center text-[.70rem] font-semibold">
									Diabetes Prediction
								</p>
							</a>
						</Link>

						<Link href="/hypertension" passHref>
							<a className="my-4 h-20 w-20 cursor-pointer space-y-2 rounded-lg border bg-white p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
								<div>
									<Image
										src="/images/hyper.png"
										width={200}
										height={200}
										draggable={false}
									/>
								</div>
								<p className="text-center text-[.70rem] font-semibold">
									High Blood Pressure
								</p>
							</a>
						</Link>

						<Link href="/404" passHref>
							<a className="my-4 h-20 w-20 cursor-pointer space-y-2 rounded-lg border bg-white p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
								<div>
									<Image
										src="/ai.png"
										width={200}
										height={200}
										draggable={false}
									/>
								</div>
								<p className="text-center text-[.70rem] font-semibold">
									Mental Health
								</p>
							</a>
						</Link>

						<Link href="/about" passHref>
							<a className="my-4 h-20 w-20 cursor-pointer space-y-2 rounded-lg border bg-white p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
								<div>
									<Image
										src="/images/about.png"
										width={200}
										height={200}
										draggable={false}
									/>
								</div>
								<p className="text-center text-[.70rem] font-semibold">
									About Us
								</p>
							</a>
						</Link>
					</div>
				</div>
			</main>
		</div>
	)
}

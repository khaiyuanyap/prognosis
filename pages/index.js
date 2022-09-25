import { useRouter } from "next/router"
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

			<div className="px-5 pt-5">
				<div
					className="w-fit ml-4 mb-4 flex items-center rounded-lg border bg-white px-2 py-1 text-sm font-semibold opacity-80 hover:opacity-60 print:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-4 w-4">
						<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
					</svg>
					Dashboard
				</div>
			</div>
			<main className="mx-8 py-5">

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

						<Link href="/therapist" passHref>
							<a className="my-4 h-20 w-20 cursor-pointer space-y-2 rounded-lg border bg-white p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
								<div>
									<Image
										src="/images/ai.png"
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

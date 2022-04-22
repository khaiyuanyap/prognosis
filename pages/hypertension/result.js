import {useRouter} from "next/router"
import Head from "next/head"
import Image from "next/image"
import {useEffect} from "react"

export default function result() {
	const router = useRouter()
	const data = router.query

	if (process.env.NODE_ENV === "development") {
		useEffect(() => {
			console.log(data)
		}, [data])
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<Head>
				<title>Hypertension Report | {data.name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="mx-5 py-5">
				<button
					onClick={() => router.push("/hypertension")}
					className="ml-4 mb-4 flex items-center rounded-lg border bg-white px-2 py-1 text-sm font-semibold opacity-80 hover:opacity-60 print:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="mr-2 h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M7 16l-4-4m0 0l4-4m-4 4h18"
						/>
					</svg>
					Go Back
				</button>
				<div className="flex items-center">
					<Image src="/hyper.png" alt="Heart" width="100" height="100"></Image>
					<div className="ml-2">
						<p className="text-sm font-semibold">
							{data.sex == 0 ? <span>Female</span> : <span>Male</span>} (
							{data.age})
						</p>
						<h1 className="font-mono text-2xl font-bold md:text-4xl">
							{data.name}
						</h1>
						<h2 className="text-md text-lg md:text-xl">Hypertension Report</h2>
					</div>
				</div>
				<div className="mt-4 hidden px-4 print:block md:block">
					<div className="flex items-center">
						{(() => {
							if (data.risk == "fit and healthy")
								return (
									<>
										<div className="flex items-center">
											<div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-100 bg-blue-100 sm:mx-0">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-4 w-4 text-blue-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth={2}>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
											</div>
											<p className="text-md ml-4 font-semibold capitalize">
												{" "}
												{data.risk}{" "}
												{(data.prediction_probability * 100).toFixed(2)}%
											</p>
										</div>
									</>
								)
							else
								return (
									<>
										<div className="flex items-center">
											<div className="flex h-8 w-8 items-center justify-center rounded-full border border-red-100 bg-red-100 sm:mx-0">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-4 w-4 text-red-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth={2}>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
													/>
												</svg>
											</div>
											<p className="text-md ml-4 font-semibold capitalize">
												{data.risk}{" "}
												{(data.prediction_probability * 100).toFixed(2)}%
											</p>
										</div>
									</>
								)
						})()}
					</div>
					<div className="gap-4 md:flex">
						{(() => {
							if (data.risk == "fit and healthy") {
								return (
									<>
										<div className="mt-4 w-full rounded-lg border-2 bg-white md:w-1/2">
											<div className="p-4">
												<h1 className="text-lg font-semibold">
													You're good to go
												</h1>
												<p>
													Maintain your current healthy lifestyle for a risk
													free life.
												</p>
											</div>
										</div>
									</>
								)
							}
							if (data.risk == "high risk of hypertension") {
								return (
									<>
										<div className="mt-4 w-full rounded-lg border-2 border-red-400 bg-red-50 md:w-1/2">
											<div className="p-4">
												<h1 className="text-lg font-semibold capitalize">
													Emergency
												</h1>
												<p>
													Consult a doctor or a medical professional
													immediately. If you’re facing immediate discomfort,
													contact emergency services as soon as possible.
												</p>
											</div>
										</div>
									</>
								)
							}
							if (data.risk == "high risk of depression") {
								return (
									<>
										<div className="mt-4 w-full rounded-lg border-2 border-red-400 bg-red-50 md:w-1/2">
											<div className="p-4">
												<h1 className="text-lg font-semibold capitalize">
													Emergency
												</h1>
												<p>
													Everything is going to be OK, try to always look at
													the bright sight of things. Think rationally and know
													that there are people who will always care and support
													you.
												</p>
											</div>
										</div>
									</>
								)
							}
							if (data.risk == "high risk of hyperglycemia") {
								return (
									<>
										<div className="mt-4 w-full rounded-lg border-2 border-red-400 bg-red-50 md:w-1/2">
											<div className="p-4">
												<h1 className="text-lg font-semibold capitalize">
													Emergency
												</h1>
												<p>
													You might have high blood sugar. Consult a doctor
													immediately. If you’re facing immediate discomfort,
													contact emergency services as soon as possible.
												</p>
											</div>
										</div>
									</>
								)
							} else {
								return (
									<>
										<div className="mt-4 w-full rounded-lg border-2 bg-white md:w-1/2">
											<div className="p-4">
												<h1 className="text-lg font-semibold capitalize">
													{data.risk}
												</h1>
												<p>
													Exercising and eating healthy is important to maintain
													healthy blood sugar content.
												</p>
											</div>
										</div>
									</>
								)
							}
						})()}
						<div className="mt-4 rounded-lg border-2 bg-white print:hidden md:w-1/2">
							<div className="p-4">
								<h1 className="text-lg font-semibold">
									Download a PDF for printing
								</h1>
								<button
									onClick={() => {
										window.print()
									}}
									className="mt-2 flex items-center rounded-lg border bg-white px-2 py-1 text-sm font-semibold opacity-80 hover:opacity-60">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="mr-2 h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
										/>
									</svg>
									Download
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

import {useRouter} from "next/router"
import Head from "next/head"
import Image from "next/image"
import value from "../../lib/boolean"

export default function result() {
	const router = useRouter()
	const data = router.query

	const table = [
		{
			label: "Body mass index",
			average: "18.5 – 24.9",
			data: data.bmi
		},
		{
			label: "Exercise",
			average: "True",
			data: value(data.exercise)
		},
		{
			label: "Daily junk food average",
			average: "0 – 2",
			data: data.junk
		},
		{
			label: "Sleep quality",
			average: "Good",
			data: (() => {
				if (data.sleep === "0") {
					return "Good"
				} else if (data.sleep === "1") {
					return "Moderate"
				} else if (data.sleep === "2") {
					return "Bad"
				}
			})()
		},
		{
			label: "Smoking",
			average: "False",
			data: value(data.smoking)
		}
	]

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
					<Image
						src="/images/hyper.png"
						alt="Heart"
						width="100"
						height="100"></Image>
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
					<div>
						<table className="min-w-full">
							<thead className="rounded-md border">
								<tr className="rounded-md border">
									<th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
										Tag
									</th>
									<th className="bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
										Range / Usual Average
									</th>
									<th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
										Value
									</th>
								</tr>
							</thead>
							<tbody>
								{table.map((item, index) => (
									<tr key={index}>
										<td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
											<div className="flex">
												<p className="group inline-flex space-x-2 truncate text-sm">
													<p className="truncate text-gray-500 group-hover:text-gray-900">
														{item.label}
													</p>
												</p>
											</div>
										</td>
										<td className="whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500">
											{item.average}
										</td>
										<td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
											<span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
												{item.data}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className="mt-4 block px-4 print:hidden md:hidden">
					<table className="min-w-full">
						<thead className="rounded-md border">
							<tr className="rounded-md border">
								<th className="bg-gray-50 px-3 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
									Tag
								</th>
								<th className="bg-gray-50 px-3 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
									Value
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="break px-3 py-1 text-sm text-gray-500">
									Body mass index
								</td>
								<td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
									{data.bmi}
								</td>
							</tr>
							<tr>
								<td className="break px-3 py-1 text-sm text-gray-500">
									Alcohol intake and consumption
								</td>
								<td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
									{value(data.drinking)}
								</td>
							</tr>
							<tr>
								<td className="break px-3 py-1 text-sm text-gray-500">
									Exercise
								</td>
								<td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
									{value(data.exercise)}
								</td>
							</tr>
							<tr>
								<td className="break px-3 py-1 text-sm text-gray-500">
									Daily junk food average
								</td>
								<td className="px-3 py-1 text-right text-sm font-semibold text-gray-500">
									{data.junk}
								</td>
							</tr>
							<tr>
								<td className="break px-3 py-1 text-sm text-gray-500">
									Sleep quality
								</td>
								<td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
									{(() => {
										if (data.sleep === "0") {
											return "Good"
										} else if (data.sleep === "1") {
											return "Moderate"
										} else if (data.sleep === "2") {
											return "Bad"
										}
									})()}{" "}
								</td>
							</tr>
							<tr>
								<td className="break px-3 py-1 text-sm text-gray-500">
									Smoking
								</td>
								<td className="px-3 py-1 text-right text-sm font-semibold text-gray-500">
									{data.smoking}
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="mt-4 px-4 print:block md:block">
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
					<div className="gap-4 md:flex visible">
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
													Everything is going to be OK, try to always look at
													the bright sight of things. Think rationally and know
													that there are people who will always care and support
													you.
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
													high risk of hypertension
												</h1>
												<p>
													Exercising and eating healthy is important to maintain
													healthy blood sodium content.
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

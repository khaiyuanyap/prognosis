import {useRouter} from "next/router"
import Head from "next/head"
import Image from "next/image"

export default function result() {
	const router = useRouter()
	const data = router.query

	const table = [
		{
			label: "Resting blood pressure",
			average: "94 – 200 (Average: 125) mm Hg",
			data: data.trestbps
		},
		{
			label: "Serum cholestoral",
			average: "126 – 564 (Average: 213) mg/dL",
			data: data.chol
		},
		{
			label: "Maximum heart rate achieved",
			average: "71 – 202 (Average: 150) BPM",
			data: data.thalach
		},
		{
			label: "Exercising ECG depression",
			average: "0 – 6.2 (Average: 0) mm Hg",
			data: data.oldpeak
		},
		{
			label: "Chance of heart attack",
			average: "Low risk < 50%, High risk > 50%",
			data: `${(data.prediction_probability * 100).toFixed(2)}%`
		}
	]

	return (
		<div className="min-h-screen bg-gray-50">
			<Head>
				<title>Cardiac Health Report | {data.name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="mx-5 py-5">
				<button
					onClick={() => router.push("/cardiac")}
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
						src="/images/cardiac.png"
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
						<h2 className="text-md text-lg md:text-xl">
							Cardiac Health Report
						</h2>
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
								{table &&
									table.map((item, index) => (
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
							{table &&
								table.map((item, index) => (
									<tr key={index}>
										<td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
											{item.label}
										</td>
										<td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
											{item.data}
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
				<div className="mt-4 px-4">
					{(() => {
						if (data.risk == "High Risk")
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
										<p className="text-md ml-4 font-semibold">
											High Risk {(data.prediction_probability * 100).toFixed(2)}
											%
										</p>
									</div>
								</>
							)
						else
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
										<p className="text-md ml-4 font-semibold">Low Risk</p>
									</div>
								</>
							)
					})()}
					<div className="gap-4 md:flex">
						{(() => {
							if (data.prediction_probability < 0.5)
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
							else if (
								data.prediction_probability > 0.5 &&
								data.prediction_probability < 0.7
							)
								return (
									<>
										<div className="mt-4 w-full rounded-lg border-2 border-yellow-300 bg-yellow-50 md:w-1/2">
											<div className="p-4">
												<h1 className="text-lg font-semibold">
													Observe your lifestyle
												</h1>
												<p>
													Make some lifestyle changes in your diet by eating
													less fatty foods and exercise regularly.
												</p>
											</div>
										</div>
									</>
								)
							else if (
								data.prediction_probability > 0.7 &&
								data.prediction_probability < 0.8
							)
								return (
									<>
										<div className="mt-4 w-full rounded-lg border-2 border-red-400 bg-red-50 md:w-1/2">
											<div className="p-4">
												<h1 className="text-lg font-semibold">
													Consult a doctor
												</h1>
												<p>
													Consult a doctor or a nutritionist to improve your
													cardiac health. If you are feeling unwell call
													emergency services.
												</p>
											</div>
										</div>
									</>
								)
							else if (data.prediction_probability > 0.8)
								return (
									<>
										<div className="mt-4 w-full rounded-lg border-2 border-red-500 bg-red-50 md:w-1/2">
											<div className="p-4">
												<h1 className="text-lg font-semibold">Emergency</h1>
												<p>
													Consult a doctor or a medical professional
													immediately. If you’re facing immediate cardiac
													discomfort, contact emergency services as soon as
													possible.
												</p>
											</div>
										</div>
									</>
								)
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

import React from "react"
import { useState } from "react"
import { useRef } from "react"
import { predict } from "./modelLogic"
import toast, { Toaster } from "react-hot-toast"

const InputFrame = ({ model, setIsOpen }) => {
	let selectedImgRef = useRef(null)

	const [error, setError] = useState(null)
	const [imgFileUrl, setImgFileUrl] = useState("")
	const [predLoading, setPredLoading] = useState(false)
	const [prediction, setPrediction] = useState([])

	const onFileChange = (e) => {
		const { files } = e.target

		if (!files[0].type.startsWith("image/")) {
			setError("Only 'jpeg/png' format images")
			return setImgFileUrl("")
		}
		setImgFileUrl(URL.createObjectURL(files[0]))
	}

	// Handle predict

	const handlePredict = (e) => {
		setPredLoading(true)
		predict(selectedImgRef, model).then((top3) => {
			setTimeout(() => {
				setPredLoading(false)
				setPrediction(top3)
				toast.dismiss()
			}, 3000)
		})
	}

	return (
		<>
			<Toaster />
			<div className="relative flex flex-col justify-center ">
				<div className="relative px-6 pt-10 pb-10">
					<div className="max-w-lg md:mx-auto">
						<div>
							<div className="mb-4 flex items-center space-x-2">
								<h2 className="text-lg font-semibold">
									Get Tested For Skin Cancer
								</h2>
								<svg
									onClick={() => setIsOpen(true)}
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 cursor-pointer"
									viewBox="0 0 20 20"
									fill="currentColor">
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							{imgFileUrl !== "" && (
								<div>
									<div>
										<img
											src={imgFileUrl}
											ref={(ele) => (selectedImgRef = ele)}
											alt={imgFileUrl}
											className="h-80 w-full rounded-lg object-cover md:w-auto lg:h-full"
										/>
									</div>
									<div>
										{predLoading && (
											prediction.length !== 0 && (
												<div className="my-2">
													<div>
														<table className="min-w-full">
															<thead className="rounded-md border">
																<tr className="rounded-md border">
																	<th className="bg-gray-50 px-3 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
																		Disease
																	</th>
																	<th className="bg-gray-50 px-3 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
																		Value
																	</th>
																</tr>
															</thead>
															<tbody>
																{prediction !== [] &&
																	prediction?.map((pred, index) => (
																		<tr key={index}>
																			<td className="break px-3 py-1 text-sm text-gray-500">
																				{pred?.className}
																			</td>
																			<td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">

																				{pred?.probability * 100 < 50 && (
																					<>Low Risk</>
																				)}
																				{pred?.probability * 100 >= 50 &&
																					pred?.probability * 100 < 60 && (
																						<>Moderate Risk</>
																					)}
																				{pred?.probability * 100 >= 60 && (
																					<>High Risk</>
																				)}

																			</td>
																		</tr>
																	))}
															</tbody>
														</table>
													</div>
												</div>
											)
										)}
									</div>
								</div>
							)}
							<div>
								<div>
									<div className="mt-5 flex flex-row justify-between gap-2">
										<div>
											<input
												type="file"
												onChange={onFileChange}
												accept="image/*"
												className="order-first block w-full basis-1/2 file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:border-blue-600 file:bg-blue-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white file:hover:border-blue-500 hover:file:bg-blue-500"
											/>
										</div>

										{imgFileUrl && (
											<div>
												<button
													className="order-last block w-full basis-1/2 cursor-pointer rounded-md border-2 border-green-500 bg-white px-3 py-1 font-semibold tracking-wide hover:opacity-80"
													onClick={
														() => {
															toast.loading("Loading...")
															handlePredict()
														}
													}>
													Predict
												</button>
												{error && <h6>{error}</h6>}
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default InputFrame

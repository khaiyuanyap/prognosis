import React, {use, useEffect} from "react"
import InputFrame from "../../components/InputFrame"
import * as tf from "@tensorflow/tfjs"
import {Fragment, useState} from "react"
import Head from "next/head"
import Accordion from "../../components/Accordion"
import {Player} from "react-tuby"
import {Dialog, Transition} from "@headlessui/react"
import {useRouter} from "next/router"
import Video from "../../components/Video"

const GetTested = () => {
	const [isLoading, setLoading] = useState(true)
	const [model, setModel] = useState(null)
	const router = useRouter()

	const loadModel = async () => {
		const mod = await tf.loadLayersModel("./model/model.json")
		setModel(mod)
	}

	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	useEffect(() => {
		setLoading(true)
		loadModel()
		setLoading(false)
	}, [setLoading])

	return (
		<div>
			<Head>
				<title>Skin Cancer</title>
			</Head>
			<Video src="/prognosisvideothings/Skin-V1.mp4" isOpen={isOpen} closeModal={closeModal}/>

			<main className="min-h-screen bg-gray-50 px-5 pt-5">
				<div>
					<button
						onClick={() => router.push("/")}
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
				</div>
				<div>
					{!isLoading && (
						<InputFrame model={model} setIsOpen={setIsOpen} />
					)}
				</div>
				<div>
					<div className="relative flex flex-col justify-center ">
						<div className="relative px-6 pt-10 pb-10">
							<div className="max-w-lg md:mx-auto">
								<h2 className="mb-4 text-lg font-semibold">
									Understanding your results
								</h2>
								<Accordion
									title="Melanocytic nevi"
									description="Skin lesion that appears within the first two decades of life. Common mole."
								/>
								<Accordion
									className="mt-4"
									title="Melanoma"
									description="A type of skin cancer which develops from the cells (melanocytes) that control pigment of the skin. Most dangerous."
								/>
								<Accordion
									className="mt-4"
									title="Benign keratosis-like lesions"
									description="Non-cancerous (benign) skin tumour that originates from cells in the outer layer of the skin. Common spots."
								/>
								<Accordion
									className="mt-4"
									title="Actinic keratosis"
									description="Pre-cancerous area of thick, scaly, or crusty skin that is the result of a sunburn or sun exposure. Highly curable pre-cancer skin."
								/>
								<Accordion
									className="mt-4"
									title="Vascular lesions"
									description="General skin lesion, constitutes of a wide spectrum of diseases. General medical condition."
								/>
								<Accordion
									className="mt-4"
									title="Dermatofibroma"
									description="Dermatofibroma, or benign fibrous histiocytomas, is a benign nodule in the skin, typically on the legs, elbows and chest of an adult. Usually painless."
								/>
								<Accordion
									className="mt-4"
									title="Basal cell carcinoma"
									description="Painless raised area of skin, which may be shiny with small blood vessels running over it. Common skin cancer."
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default GetTested

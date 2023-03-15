import Head from "next/head"
import {Input} from "../../components/Form"
import {useState} from "react"
import {useRouter} from "next/router"
import Radio from "../../components/Radio"
import Video from "../../components/Video"
import toast, { Toaster } from 'react-hot-toast';

export default function home() {
	const router = useRouter()
	const [name, setName] = useState("")
	const [age, setAge] = useState("22")
	const [sex, setSex] = useState("0")
	const [polyuria, setPolyuria] = useState("0")
	const [polydipsia, setPolydipsia] = useState("0")
	const [weight, setWeight] = useState("0")
	const [weakness, setWeakness] = useState("0")
	const [polyphagia, setPolyphagia] = useState("0")
	const [genital_thrush, setGenitalThrush] = useState("0")
	const [visual_blurring, setVisualBlurring] = useState("0")
	const [itching, setItching] = useState("0")
	const [irritability, setIrritability] = useState("0")
	const [delayed_healing, setDelayedHealing] = useState("0")
	const [partial_paresis, setPartialParesis] = useState("0")
	const [muscle_stiffness, setMuscleStiffness] = useState("0")
	const [alopecia, setAlopecia] = useState("0")
	const [obesity, setObesity] = useState("0")

	async function handleSubmit(e) {
		e.preventDefault()
		toast.loading('Loading...')
		const res = await fetch("/api/diabetes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				age: age,
				sex: sex,
				polyuria: polyuria,
				polydipsia: polydipsia,
				weight: weight,
				weakness: weakness,
				polyphagia: polyphagia,
				genital_thrush: genital_thrush,
				visual_blurring: visual_blurring,
				itching: itching,
				irritability: irritability,
				delayed_healing: delayed_healing,
				partial_paresis: partial_paresis,
				muscle_stiffness: muscle_stiffness,
				alopecia: alopecia,
				obesity: obesity
			})
		})
		const data = await res.json()
		const risk = data.risk
		toast.dismiss()
		router.push(
			{
				pathname: "/diabetes/result",
				query: {
					name,
					age,
					sex,
					polyuria,
					polydipsia,
					weight,
					weakness,
					polyphagia,
					genital_thrush,
					visual_blurring,
					itching,
					itching,
					irritability,
					delayed_healing,
					partial_paresis,
					muscle_stiffness,
					alopecia,
					obesity,
					risk
				}
			},
			`/diabetes/result/${name.toLowerCase()}`
		)
	}

	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	return (
		<div>
			<Toaster />
			<Head>
				<title>Diabetes Checkup</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

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
				<div className="relative flex min-h-screen flex-col justify-center bg-gray-50">
					<div className="relative px-6 pt-10 pb-10">
						<div className="max-w-lg md:mx-auto">
							<Video
								src="/static/Diabetes-V1.mov"
								isOpen={isOpen}
								closeModal={closeModal}
							/>

							<form
								className="space-y-4"
								onSubmit={(e) => handleSubmit(e)}
								method="post">
								<div className="mb-4 flex items-center space-x-2">
									<h2 className="text-lg font-semibold">
										Diabetes checkup
										
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

								<Input
									type="text"
									pattern="^[A-Za-z ]+$"
									onChange={(e) => setName(e.target.value)}
									placeholder={"Please provide your name"}
									className="flex h-10 w-full items-center rounded-md border-2 border-gray-200 px-4"
								/>
								<Input
									type="number"
									min="0"
									onChange={(e) => setAge(e.target.value)}
									placeholder={"Your age relative to birth date"}
									className="flex h-10 w-full items-center rounded-md border-2 border-gray-200 px-4"
								/>
								<Biologicalsex />
								<Polyuria />
								<Polydipsia />
								<Weight />
								<Weakness />
								<Polyphagia />
								<GenitalThrush />
								<VisualBlurring />
								<Itching />
								<Irritability />
								<DelayedHealing />
								<PartialParesis />
								<MuscleStiffness />
								<Alopecia />
								<Obesity />
								<button
									type="submit"
									className="rounded-md border-2 border-green-500 bg-white px-3 py-1 font-semibold tracking-wide hover:opacity-80">
									Predict
								</button>
							</form>
						</div>
					</div>
				</div>
			</main>
		</div>
	)

	function Biologicalsex() {
		return (
			<Radio
				name0="Female"
				name1="Male"
				label="Biological sex"
				onChange={setSex}
				value={sex}
			/>
		)
	}

	function Polyuria() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Excessive urination"
				onChange={setPolyuria}
				value={polyuria}
			/>
		)
	}

	function Polydipsia() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Excessive thirst"
				onChange={setPolydipsia}
				value={polydipsia}
			/>
		)
	}

	function Weight() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Excessive weight loss"
				onChange={setWeight}
				value={weight}
			/>
		)
	}

	function Weakness() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Feeling weak with no reason"
				onChange={setWeakness}
				value={weakness}
			/>
		)
	}

	function Polyphagia() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Excessive eating"
				onChange={setPolyphagia}
				value={polyphagia}
			/>
		)
	}

	function GenitalThrush() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Yeast infection"
				onChange={setGenitalThrush}
				value={genital_thrush}
			/>
		)
	}

	function VisualBlurring() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Visual blurring"
				onChange={setVisualBlurring}
				value={visual_blurring}
			/>
		)
	}

	function Itching() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Sudden itching or burning sensation on skin"
				onChange={setItching}
				value={itching}
			/>
		)
	}

	function Irritability() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Irritability with no reason"
				onChange={setIrritability}
				value={irritability}
			/>
		)
	}

	function DelayedHealing() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Delayed healing"
				onChange={setDelayedHealing}
				value={delayed_healing}
			/>
		)
	}

	function PartialParesis() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Weakening of muscle"
				onChange={setPartialParesis}
				value={partial_paresis}
			/>
		)
	}

	function MuscleStiffness() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Stiffness"
				onChange={setMuscleStiffness}
				value={muscle_stiffness}
			/>
		)
	}

	function Alopecia() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Hair loss"
				onChange={setAlopecia}
				value={alopecia}
			/>
		)
	}

	function Obesity() {
		return (
			<Radio
				name0="False"
				name1="True"
				label="Obesity"
				onChange={setObesity}
				value={obesity}
			/>
		)
	}
}

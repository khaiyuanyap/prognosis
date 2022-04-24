import {useRouter} from "next/router"

export default function about() {
	const router = useRouter()

	return (
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
			<div className="px-5 py-8">
				<h1 className="mb-8 text-2xl font-semibold">About Prognosis</h1>
				<p className="font-semibold ">
					TLDR: Prognosis is a web app that predicts your risk of getting
					diseases with machine learning.
				</p>
				<div>
					<p className="my-4">
						Common health conditions like heart diseases and diabetes are highly
						treatable if caught early. However not everyone have access to
						routine medical checkups due to regional availability or limited
						financial capabilities. Hence Project Prognosis intends to merge
						disease identification and preventive healthcare into a simple to
						use, free and open source web app to be used by everyone.
					</p>
					<p className="my-4">
						Using machine learning, we are able to identify diseases based on
						the user’s lifestyle data which they’ve inputted into our web
						interface. We will return a risk report for the user as well as some
						advice to prevent the progression of said diseases.
					</p>
					<p className="my-4">
						Other than that we have a psychiatric chat bot named Murphy who is
						trained to interact with people suffering from mental distress.
						Murphy is made with the Rasa Stack NLU library.
					</p>
					<p className="my-4">
						With the open source community we plan to further integrate more
						disease prediction and identification into a free to use framework
						for the general public.
					</p>
				</div>
			</div>
		</main>
	)
}

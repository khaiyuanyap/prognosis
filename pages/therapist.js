import React, {useState, useRef, useEffect} from "react"
import MurphyBot from "../lib/murphybot"
import ChatHistory from "../components/ChatHistory"
import {useRouter} from "next/router"
import ScrollableFeed from "react-scrollable-feed"
import Head from "next/head"

export default function Therapist() {
	const router = useRouter()
	const [userInput, setUserInput] = useState("")
	const eliza = new MurphyBot()

	function fixup(text) {
		return text.replace(/ \?/g, "?")
	}

	const [messages, setMessages] = useState([
		{
			user: false,
			text: fixup(eliza.getInitial()),
			date: new Date()
		}
	])

	function handleInput(input) {
		input = input.trim()
		if (!input) return
		setMessages((messages) => [
			...messages,
			{
				user: true,
				text: fixup(input),
				date: new Date()
			}
		])
		reply()
	}

	function reply() {
		setMessages((messages) => [
			...messages,
			{
				user: false,
				text: fixup(eliza.transform(userInput)),
				date: new Date()
			}
		])
	}

	return (
		<div>
			<Head>
				<title>Virtual Therapist</title>
			</Head>
			<main className="px-5 py-5">
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
				<div className="mx-4">
					<div className="rounded-lg border-2 bg-white p-4">
						<div>
							<div className="relative h-[28rem] overflow-y-auto">
								<ScrollableFeed>
									<ChatHistory messages={messages} />
								</ScrollableFeed>
							</div>
							<div className="sticky w-full">
								<form
									onSubmit={(e) => {
										e.preventDefault()
										handleInput(userInput)
										setUserInput("")
									}}>
									<div className="mt-5 flex items-center">
										<input
											value={userInput}
											required
											placeholder="Type a message..."
											onChange={(e) => setUserInput(e.target.value)}
											className="w-full rounded-full border-2 bg-gray-50 py-2 px-4"
										/>
										<button type="submit">
											<svg
												className="ml-2 h-5 w-5 origin-center rotate-90 transform text-gray-500 hover:opacity-80"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor">
												<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
											</svg>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

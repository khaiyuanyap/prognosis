import React, {useState, useRef, useEffect} from "react"
import ElizaBot from "../lib/elizabot"
import ChatHistory from "../components/ChatHistory"

export default function Therapist() {
	const [userInput, setUserInput] = useState("")
	const eliza = new ElizaBot()

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
		<div className="container mx-auto">
			<div className="max-w-2xl">
				<div className="relative h-56 overflow-y-auto p-4">
					<ChatHistory messages={messages} />
				</div>
				<div className="sticky w-full">
					<form
						onSubmit={(e) => {
							e.preventDefault()
							handleInput(userInput)
							setUserInput("")
						}}>
						<input
							value={userInput}
							onChange={(e) => setUserInput(e.target.value)}
							className="w-full rounded-md border bg-transparent py-2 px-4"
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

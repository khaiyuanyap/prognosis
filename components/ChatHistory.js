import ChatMessage from "./ChatMessage"

export default function ChatHistory(props) {

	const messages = props.messages.map((message, index) => (
		<ChatMessage key={index} message={message} />
	))

	return <div id="chatHistory" className="space-y-2 m-4" >{messages}</div>
}

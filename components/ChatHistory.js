import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage"

export default function ChatHistory(props) {
	const elementRef = useRef();
	useEffect(() => elementRef.current.scrollIntoView(
		{ block: "end" }
	));

	const messages = props.messages.map((message, index) => (
		<ChatMessage key={index} message={message} />
	))

	return <div id="chatHistory" className="space-y-2 m-4" ref={elementRef}>{messages}</div>
}

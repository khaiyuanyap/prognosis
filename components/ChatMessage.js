import React, {Component} from "react"

class ChatMessage extends Component {
	render() {
		const message = this.props.message
		let author = "MURPHY"
		let className = "murphy"
		if (message.user) {
			author = "Me"
			className = "user"
		}

		return (
			<div className={className === "murphy" ? "flex justify-start" : "flex justify-end"}>
				<div className="box">
					<div className={className === "murphy" ? "px-2 py-4 rounded-2xl rounded-bl-none bg-gray-100 border" : "px-2 py-4 bg-blue-500 rounded-2xl rounded-br-none text-white"}>
					<p className="font-semibold text-xs">
						{author} | Today at{" "}
						{message.date.toLocaleTimeString("en-US", {
							hour: "numeric",
							minute: "numeric",
							second: "numeric",
							hour12: false
						})}
					</p>
					<p className="break-words">{message.text}</p>
				</div>
				</div>
			</div>
		)
	}
}

export default ChatMessage

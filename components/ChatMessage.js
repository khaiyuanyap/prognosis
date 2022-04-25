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
			<div className={className === "murphy" ? "flex justify-start" : "flex justify-end "}>
				<div className="box">
					<div className={className === "murphy" ? "px-2 py-4 bg-blue-50 border-blue-200 rounded-lg rounded-bl-none border" : "px-2 py-4 bg-white rounded-lg rounded-br-none border"}>
					<p className="font-semibold text-xs text-gray-500">
						{author} | Today at{" "}
						{message.date.toLocaleTimeString("en-US", {
							hour: "numeric",
							minute: "numeric",
							second: "numeric",
							hour12: false
						})}
					</p>
					<p className="break-all">{message.text}</p>
				</div>
				</div>
			</div>
		)
	}
}

export default ChatMessage

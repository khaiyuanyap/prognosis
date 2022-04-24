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
			<p className={className}>
				<p>
					{author} | Today at{" "}
					{message.date.toLocaleTimeString("en-US", {
						hour: "numeric",
						minute: "numeric",
						second: "numeric",
						hour12: false
					})}
				</p>
				<p>{message.text}</p>
			</p>
		)
	}
}

export default ChatMessage

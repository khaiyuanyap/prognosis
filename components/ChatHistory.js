import React, { Component } from 'react';
import ChatMessage from './ChatMessage'

class ChatHistory extends Component {
  render() {
    const messages = this.props.messages.map((message, index) =>
      <ChatMessage key={index} message={message} />
    );

    return (
      <div id="chatHistory">
        {messages}
      </div>
    );
  }
}

export default ChatHistory;

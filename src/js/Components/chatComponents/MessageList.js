import  React from 'react';

import Message from './Message'

export default class MessageList extends React.Component {
    renderMessage() {
        return this.props.messages.map((message) => <Message message={message} />)
    }

    render() {
        return (
            <div className="messages">
                {this.renderMessage()}
            </div>
        )
    }
}

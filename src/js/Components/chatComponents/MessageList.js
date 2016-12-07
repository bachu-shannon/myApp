import  React from 'react';

import Message from './Message'

export default class MessageList extends React.Component {
    renderMessage() {
        if(this.props.messages.length > 0){
            return this.props.messages.map((message, index) => <Message key={index} message={message}  date={this.props.date}/>)
        }
    }

    render() {
        return (
            <div className="messages">
                {this.renderMessage()}
            </div>
        )
    }
}

import  React from 'react';

import Message from './Message'

export default class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderMessage() {
        if(this.props.messages.length > 0){
            return this.props.messages.map((message, index) => <Message key={index} from={message.from} message={message.text} photo={this.props.photo} date={message.date}/>)
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

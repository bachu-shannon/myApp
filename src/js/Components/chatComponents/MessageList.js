import  React from 'react';

import Message from './Message'

export default class MessageList extends React.Component {
    render() {
        return (
            <div className="messages">
                <Message />
            </div>
        )
    }
}
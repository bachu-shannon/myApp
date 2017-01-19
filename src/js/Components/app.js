import React from "react";

import ListUsers from './chatComponents/ListUsers'
import MessageList from'./chatComponents/MessageList'
import MessageForm from'./chatComponents/MessageForm'

const users = [
    {
        name: "Shannon",
        photo: "http://www.dhresource.com/260x260s/f2-albu-g2-M01-83-D9-rBVaG1XMgriAebx6AAL4S26G0Sg228.jpg/50-pcs-despicable-me-golf-minions-plush-toy.jpg",
        status: true,
        notification: 5
    },
    {
        name: "Dasha",
        photo: "http://www.dhresource.com/260x260s/f2-albu-g2-M01-83-D9-rBVaG1XMgriAebx6AAL4S26G0Sg228.jpg/50-pcs-despicable-me-golf-minions-plush-toy.jpg",
        status: true,
        notification: 3
    },
    {
        name: "Ketrin",
        photo: "http://www.dhresource.com/260x260s/f2-albu-g2-M01-83-D9-rBVaG1XMgriAebx6AAL4S26G0Sg228.jpg/50-pcs-despicable-me-golf-minions-plush-toy.jpg",
        status: false,
        notification: 8
    }
];

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users,
            messages: []
        }
    }

    pushMessage(message) {
        let messages = this.state.messages;
        messages.push(message);
        this.setState({
            messages
        });
        console.log(this.state.messages);
    }



    render() {
        return (
            <div className="app">
                <ListUsers users={this.state.users} />
                <div className="chat-block">
                    <MessageList messages={this.state.messages} />
                    <MessageForm pushMessage={this.pushMessage.bind(this)} />
                </div>
            </div>
        )
    }
}


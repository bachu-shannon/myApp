import React from "react";

import ListUsers from'./chatComponents/listUsers'
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
            value: '',
            messages: [],
            message: '',
        }
    }

    changeValue(value) {
        this.setState({value});
    }

    changeMessage(message) {
        this.setState({message});
    }

    pushMessage(message) {
        this.state.messages.push({message});
        console.log(this.state.messages);
    }

    render() {
        return (
            <div className="app">
                <ListUsers changeValue={this.changeValue.bind(this)} users={this.state.users} value={this.state.value}/>
                <div className="chat-block">
                    <MessageList renderMessage={this.changeMessage.bind(this)} messages={this.state.messages} />
                    <MessageForm pushMessage={this.pushMessage.bind(this)} changeMessage={this.changeMessage.bind(this)} messages={this.state.messages} message={this.state.message} />
                </div>
            </div>
        )
    }
}


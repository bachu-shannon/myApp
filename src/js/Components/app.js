import React from "react";

/*import RegistrationForm from './loginComponents/RegistarationUser';*/
import LoginForm from './loginComponents/LoginUser';
import ListUsers from './chatComponents/ListUsers';
import MessageList from'./chatComponents/MessageList';
import MessageForm from'./chatComponents/MessageForm';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
            users: [],
            messages: []
        };
    }

    pushMessage(message) {
        let messages = this.state.messages;
        messages.push(message);
        this.setState({
            messages
        });
    }

    onLogin(newUser) {
        let users = this.state.users;
        let user = this.state.user;
        this.setState({
            user: newUser
        });
        users.push(newUser);
        this.setState({
            users
        });

        console.log(this.state.user);
    }

    render() {
        if(this.state.users.length == 0) {
            return  (
                <div className="enter_block">
                    <LoginForm onLogin={this.onLogin.bind(this)}/>
                </div>
            )
        }
        return (
            <div className="wrapper_app">
                <div className="app_chat">
                    <ListUsers users={this.state.users} />
                    <div className="chat-block">
                        <MessageList messages={this.state.messages} photo={this.state.user.photo}/>
                        <MessageForm pushMessage={this.pushMessage.bind(this)} user={this.state.user}/>
                    </div>
                </div>
            </div>
        )
    }
}

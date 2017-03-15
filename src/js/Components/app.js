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
            user: {
                name: '',
                photo: 'http://vignette2.wikia.nocookie.net/mafiagame/images/2/23/Unknown_Person.png/revision/latest/scale-to-width-down/464?cb=20151119092211',
                notification: 0,
                isActive: false
            },
            users: [],
            messages: []
        }
    }

    pushMessage(message) {
        let messages = this.state.messages;
        messages.push(message);
        this.setState({
            messages
        });
    }

    onLogin(userName) {
        let users = this.state.users;
        let user = this.state.user;
        user.name = userName;
        user.isActive = true;
        users.push(user);
        this.setState({
            users
        });
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
                        <MessageForm pushMessage={this.pushMessage.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

import React from 'react';
const io = require ('socket.io-client');
const socket = io();

export default class LoginUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginValue: '',
        };
        socket.on('login user', (user) => this.props.onLogin(user));
    }

    getLogin(ev) {
        let loginValue = ev.target.value;
        this.setState({
            loginValue
        });
    }

    logIn(ev) {
        ev.preventDefault();
        const newUser = {
            id: JSON.stringify(new Date()),
            name: this.state.loginValue,
            photo: 'http://vignette2.wikia.nocookie.net/mafiagame/images/2/23/Unknown_Person.png/revision/latest/scale-to-width-down/464?cb=20151119092211',
            isActive: true
        };
        if(this.state.loginValue != '') {
            /*this.props.onLogin(this.state.name);*/
            socket.emit('login user', newUser);
        }
        this.setState({
            loginValue: ''
        });
    }

    render() {
        return (
            <div className="form_enter login_user">
                <h2 className="form_title">Вход</h2>
                <form className="login_user__form" id="js-login-form">
                    <input type="text" name="login" placeholder="Login..." onChange={this.getLogin.bind(this)}/>
                    {/*<input type="password" name="password" placeholder="Password..."/>*/}
                    <button type="submit" className="enter_user" onClick={this.logIn.bind(this)}>Войти</button>
                    {/*<button className="btn_registration_user" onClick={this.showRegistration.bind(this)}>Регистрация</button>*/}
                </form>
            </div>
        )
    }
}
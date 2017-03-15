import React from 'react';

export default class LoginUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isActive: false
        }
    }

    getLogin(ev) {
        let name = ev.target.value;
        this.setState({
            name
        })
    }

    logIn(ev) {
        ev.preventDefault();
        if(this.state.name != '') {
            this.props.onLogin(this.state.name);
        }
        this.setState({
            name: ''
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
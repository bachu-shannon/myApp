import React from 'react';

export default class LoginUser extends React.Component {

    showRegistration(event) {
        event.preventDefault();
        let loginForm = document.getElementsByClassName('login_form')[0];
        let registrationForm = document.getElementsByClassName('registration_form')[0];

        loginForm.classList.add('hide');
        setTimeout(function() {
            registrationForm.classList.add('show');
        }, 1000);
    }

    render() {
        return (
            <div className="form_enter login_user">
                <h2 className="form_title">Вход</h2>
                <form className="login_user__form" id="js-login-form">
                    <input type="text" name="login" placeholder="Login..."/>
                    <input type="text" name="password" placeholder="Password..."/>
                    <button type="submit" className="enter_user">Войти</button>
                    <button className="btn_registration_user" onClick={this.showRegistration.bind(this)}>Регистрация</button>
                </form>
            </div>
        )
    }
}

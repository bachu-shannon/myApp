import React from 'react';

export default class RegistrationUser extends React.Component {
    constructor(props) {
        super(props);
    }

    registrationUser(event){
        event.preventDefault();
        console.log(this.props.users);
    }

    render() {
        return (
            <div className="form_enter registration_user">
                <h2 className="form_title">Регистрация</h2>
                <form className="registration_user__form" id="js-registration-form">
                    <input type="text" name="name" placeholder="Your name..."/>
                    <input type="text" name="login" placeholder="Login..."/>
                    <input type="text" name="password" placeholder="Password..."/>
                    <button onClick={this.registrationUser.bind(this)} type="submit" className="btn_registration_user">Зарегистрироваться</button>
                </form>
            </div>
        )
    }
}

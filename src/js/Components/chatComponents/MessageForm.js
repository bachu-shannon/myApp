import React from 'react';

export default class MessageForm extends React.Component {
    handleChange(ev) {
        let text = ev.target.value;
        this.props.changeMessage(text);
    }

    handleClick(ev) {
        ev.preventDefault();
        this.props.messages.push(this.props.message);
    }

    render() {
        return(
            <div className="message-form">
                <form action="#" method="post">
                    <textarea onChange={this.handleChange.bind(this)} className="message" type="text" name="message" id="js-message" placeholder="Write your message..."/>
                    <button className="send" type="submit" name="send" id="js-send" onClick={this.handleClick.bind(this)}>Send</button>
                </form>
            </div>
        )
    }
}

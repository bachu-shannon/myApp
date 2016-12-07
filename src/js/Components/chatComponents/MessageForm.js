import React from 'react';

export default class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }
    handleChange(ev) {
        let message = ev.target.value;
        this.setState({
            message
        });
    }

    handleClick(ev) {
        ev.preventDefault();
        this.props.pushMessage(this.state.message);
        this.setState({
            message: ''
        });

        let date = new Date();
        let H = date.getHours();
        let M = date.getMinutes();
        let time = H + ":" + M;
        console.log(time);
        this.props.renderDate(time);
    }

    render() {
        return(
            <div className="message-form">
                <form action="#" method="post">
                    <textarea onChange={this.handleChange.bind(this)} className="message" type="text" name="message" id="js-message" placeholder="Write your message..." value={this.state.message} />
                    <button className="send" type="submit" name="send" id="js-send" onClick={this.handleClick.bind(this)}>Send</button>
                </form>
            </div>
        )
    }
}

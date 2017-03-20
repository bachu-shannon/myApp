import React from 'react';
const io = require ('socket.io-client');
const socket = io();

export default class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            date: ''
        };

        socket.on('chat message', (msg) => this.props.pushMessage(msg));
    }

    handleChange(ev) {
        let message = ev.target.value;
        let date = this.renderDate();

        let sendBtn = document.getElementsByClassName('send')[0];
        if(message != ''){
            sendBtn.classList.remove('send-off');
        }else{
            sendBtn.classList.add('send-off');
        }

        this.setState({
            message,
            date
        });
    }

    handleClick(ev) {
        ev.preventDefault();

        let sendBtn = document.getElementsByClassName('send')[0];
        sendBtn.classList.add('send-off');

        if(this.state.message != '') {
            /*this.props.pushMessage();*/
            socket.emit('chat message', {from: this.props.user.name, text: this.state.message, date: this.state.date});
        }
        this.setState({
            message: ''
        });
    }

    renderDate() {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        let date = new Date();
        let H = date.getHours();
        let M = addZero(date.getMinutes());

        return H + ":" + M;
    }

    render() {
        return(
            <div className="message-form">
                <form action="#" method="post">
                    <textarea onChange={this.handleChange.bind(this)} className="message" type="text" name="message" id="js-message" placeholder="Write your message..." value={this.state.message} />
                    <button className="send send-off" type="submit" name="send" id="js-send" onClick={this.handleClick.bind(this)}>Send</button>
                </form>
            </div>
        )
    }
}

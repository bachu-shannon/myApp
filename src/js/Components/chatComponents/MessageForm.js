import React from 'react';

export default class MessageForm extends React.Component {
    render() {
        return(
            <div className="message-form">
                <form action="#" method="post">
                    <textarea className="message" type="text" name="message" id="js-message" placeholder="Write your message..."/>
                    <button className="send" type="submit" name="send" id="js-send">Send</button>
                </form>
            </div>
        )
    }
}

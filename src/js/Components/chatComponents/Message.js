import React from 'react';

export default class Message extends React.Component {
    render() {
        return (
            <div>
                {(() => {
                    if(!this.props.from) {
                        return (
                            <div className="user-message">
                                <div className="user-photo">
                                    <img src={this.props.photo} alt=""/>
                                </div>
                                <div className="user-message__text">
                                    <p>{this.props.message}</p>
                                </div>
                                <div className="user-message__time"><span>{this.props.date}</span></div>
                            </div>
                        )
                    }else{
                        return (
                            <div className="user-message my-message">
                                <div className="user-message__text">
                                    <p>{this.props.message}</p>
                                </div>
                                <div className="user-message__time"><span>{this.props.date}</span></div>
                            </div>
                        )
                    }
                })()}
            </div>
        )
    }
}
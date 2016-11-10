import React from 'react';

export default class User extends React.Component {
    render() {
        return(
            <div className="user">
                <div className="notification">{this.props.notification}</div>
                <div className="user-photo">
                    <img src={this.props.photo} alt=""/>
                </div>
                <div className="user-info">
                    <div className="user-info__name">{this.props.name}</div>
                    <div className="user-info__status"></div>
                </div>
            </div>
        )
    }
}

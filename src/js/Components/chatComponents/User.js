import React from 'react';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationCount: 0
        }
    }

   /* renderNotification()*/

    render() {
        return(
            <div className="user">
                {/*<div className="user-status active">
                    <svg viewBox="0 0 508.52 508.52">
                        <g>
                            <path d="M254.26,0C113.845,0,0,113.845,0,254.26s113.845,254.26,254.26,254.26 s254.26-113.845,254.26-254.26S394.675,0,254.26,0z M372.046,183.925l-121.79,186.15l-0.095,0.064l-1.78,2.956l-3.814,2.765     l-0.985,0.667l-6.229,2.606l-2.161,0.509l-5.339,0.127l-3.719-0.636l-3.655-1.43l-3.051-1.208l-1.684-1.685l-0.826-0.509     l-70.907-65.567c-9.026-8.359-9.567-22.438-1.24-31.433c8.327-8.994,22.407-9.567,31.433-1.24l51.329,47.483L334.797,159.58     c6.738-10.266,20.531-13.158,30.797-6.452C375.891,159.866,378.784,173.659,372.046,183.925z" fill="#5cba18"/>
                        </g>
                    </svg>
                </div>*/}
                {/*<div className="user-status not-active">
                    <svg viewBox="0 0 52 52">
                        <g>
                            <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28h-25c-1.104,0-2-0.896-2-2  s0.896-2,2-2h25c1.104,0,2,0.896,2,2S39.604,28,38.5,28z" fill="#f52f53"/>
                        </g>
                    </svg>
                </div>*/}
                <div className="notification">{this.state.notificationCount}</div>
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

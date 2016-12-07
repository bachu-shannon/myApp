import React from 'react';

export default class Message extends React.Component {
    render() {
        return (
        <div className="user-message">
            <div className="user-photo">
                <img src="http://www.dhresource.com/260x260s/f2-albu-g2-M01-83-D9-rBVaG1XMgriAebx6AAL4S26G0Sg228.jpg/50-pcs-despicable-me-golf-minions-plush-toy.jpg" alt=""/>
            </div>
            <div className="user-message__text">
                <p>{this.props.message}</p>
            </div>
            <div className="user-message__time"><span>22:35</span></div>
        </div>
            /*<div className="chat-block__window">
                <div className="user-message">
                    <div className="user-photo">
                        <img src="http://www.dhresource.com/260x260s/f2-albu-g2-M01-83-D9-rBVaG1XMgriAebx6AAL4S26G0Sg228.jpg/50-pcs-despicable-me-golf-minions-plush-toy.jpg" alt=""/>
                    </div>
                    <div className="user-message__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloremque eum in itaque magni modi officia vel. Amet blanditiis consectetur, cupiditate deleniti eius esse explicabo fugit inventore iste iure laborum magni maiores, perferendis quae, reiciendis rem repudiandae veniam voluptate voluptates.</p>
                    </div>
                    <div className="user-message__time"><span>22:35</span></div>
                </div>
                {/!*<div className="user-message my-message">
                    <div className="user-message__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium est explicabo ipsa libero non possimus quidem reprehenderit sed totam ut?</p>
                    </div>
                    <div className="user-message__time"><span>22:35</span></div>
                </div>
                <div className="user-message">
                    <div className="user-photo">
                        <img src="http://www.dhresource.com/260x260s/f2-albu-g2-M01-83-D9-rBVaG1XMgriAebx6AAL4S26G0Sg228.jpg/50-pcs-despicable-me-golf-minions-plush-toy.jpg" alt=""/>
                    </div>
                    <div className="user-message__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium est explicabo ipsa libero non possimus quidem reprehenderit sed totam ut?</p>
                    </div>
                    <div className="user-message__time"><span>22:35</span></div>
                </div>
                <div className="user-message my-message">
                    <div className="user-message__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium est explicabo ipsa libero non possimus quidem reprehenderit sed totam ut?</p>
                    </div>
                    <div className="user-message__time"><span>22:35</span></div>
                </div>*!/}
            </div>*/
        )
    }
}
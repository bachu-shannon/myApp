import React from 'react';

import User from './User';

export default class ListUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    renderUsers() {
        let users = this.props.users;
        if(this.state.value.length > 0) {
            users = users.filter((user) => {
                return user.name.toLowerCase().includes(this.state.value.toLowerCase())
            });
        }
        return users.map((user, index) => <User key={index} {...user} />)
    }

    handleChange(ev) {
        let value = ev.target.value;
        this.setState({
            value
        });
    }

    render() {
        return(
            <div className="list-users">
                <input onChange={this.handleChange.bind(this)} type="text" className="search-user" placeholder="Search friend..."/>
                {this.renderUsers()}
            </div>
        )
    }
}

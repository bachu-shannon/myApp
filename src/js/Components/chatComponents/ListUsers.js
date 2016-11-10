import React from 'react';
import _ from 'lodash';

import User from './User';

export default class ListUsers extends React.Component {

    renderUsers() {
        return _.map(this.props.users, (user, index) => <User key={index} {...user} />)
    }

    handleChange(ev) {
        let value = ev.target.value;
        this.props.changeValue(value);
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

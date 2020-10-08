import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./PureLink.scss"

export default class PureLink extends Component {

    render() {
        return (
            <Link to={this.props.to} className='pure-link'>
                {this.props.children}
            </Link>
        )
    }
}

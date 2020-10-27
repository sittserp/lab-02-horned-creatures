import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header"> Hi, {this.props.name}, I am the header!
            </div>
        )
    }
}

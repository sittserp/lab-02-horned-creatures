import React, { Component } from 'react'
import images from './data.js';

export default class ImageItem extends Component {
    render() {
        return (
            <div className="image-item" styel={{ background: this.props.color }}>
                <div>{this.props.title}</div>
                <img className="creature" src={this.props.src} alt='horned creature' />
                <div>{this.props.description}</div>
            </div>
        )
    }
}

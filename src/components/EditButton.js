import React, { Component } from 'react';

class EditButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: 'edit',
        }
    }
    addActiveClass() {
        this.setState({
            classes: 'edit active'
        })
    }

    removeActiveClass() {
        this.setState({
            classes: 'edit'
        })
    }

    render() {
        return (
            <div className={ this.state.classes } onMouseEnter={this.addActiveClass.bind(this) } onMouseLeave={ this.removeActiveClass.bind(this)} >
                <button onClick={this.props.onClick}>Edit</button>
            </div>
        )
    }
}

export default EditButton;
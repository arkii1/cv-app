import React, {Component} from 'react';

export default class ArrayInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            array: this.props.array,
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.array.map((element) => {
                        return (
                            <div key={element.key}>
                                <label htmlFor={element.name} >{element.name}</label>
                                <input type={element.type} id={element.name} onChange={e => this.props.setParentState(e)}></input>
                            </div>
                        )
                    })
                }
                <button onClick={this.props.addElementCb}></button>
            </div>
        )
    }
}
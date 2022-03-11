import React, {Component} from 'react';

export default class UnorderedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listArray: this.props.array,
        };
    }

    tick() {
        if(this.props.getArray === null || this.props.getArray === undefined)
            return;

        if(this.props.getArray() !== this.state.listArray)
        {
            this.setState({
                listArray: this.props.getArray(),
            });
        }
    }

    componentDidMount() { // probably isn't the best way to handle this
        let isMounted = true;
        if(isMounted) {
            setInterval(() => {
                this.tick();
            }, 1000/60);
        }
    }

    render() {
        return (
            <ul>{this.state.listArray.map((element) => {
                return <li key={element.key}>{element.content}</li>
                })}
            </ul>
        )
    }
}

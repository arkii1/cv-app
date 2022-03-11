import React, {Component} from 'react';

export default class EditForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: 'edit-form',
            data: this.props.data
        }
    }

    tick() {
        const shouldFormOpen = this.props.getShouldFormOpen();
        if(shouldFormOpen && this.state.classes !== 'edit-form active') {
            this.setState({
                classes: 'edit-form active'
            });
        }
        else if(!shouldFormOpen && this.state.classes !== 'edit-form') {
            this.setState({
                classes: 'edit-form'
            });
        }
        
        if(this.props.getData){
            if(this.state.data !== this.props.getData()){
                this.setState({
                    data: this.props.getData(),
                })
            }
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

    yeet() {
        console.log("please");
    }

    render() {
        return (
            <form className={this.state.classes} onSubmit={e => this.props.onSubmit(e)}>
                {this.state.data.map((element) => {
                    console.log("updatinf");
                    if(element.type === 'button'){
                        return (
                            <div key={element.key}>
                                    <input type='button' onClick={this.yeet.bind(this)} id={element.name} value={element.name}></input>
                            </div>
                            )
                    }
                    else return (
                        <div key={element.key}>
                            <label htmlFor={element.name} >{element.name}</label>
                            <input type={element.type} id={element.name} onChange={e => this.props.onInputChange(e)}></input>
                        </div>
                    )
                })}
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}
import React, {Component} from 'react';

export default class Role extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                startDate: this.props.startDate,
                endDate: this.props.endDate,
                title: this.props.title,
                organization: this.props.organization,
                location: this.props.location,
                description: this.props.description
            }
        };
    }
    
    getDateRange = (start, end) => {
        return start + ' - ' + end;
    }

    tick() {
        const stateData = this.props.getState(this.props.name);
        if(this.state.data !== stateData){
            this.setState({
                data: stateData,
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
            <div className="role">
                <div className="role-left">
                    <h3>{this.state.data.title}</h3>
                    <small>{this.getDateRange(this.state.data.startDate, this.state.data.endDate)}</small>
                </div>
                <div className="role-right">
                    <h3>{this.state.data.organization}</h3>
                    <small>{this.state.data.location}</small>
                    <p>{this.state.data.description}</p>
                </div>
            </div>
        )
    
    }
}
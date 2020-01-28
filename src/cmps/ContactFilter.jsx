import React from 'react';
import { Component } from "react";



export default class ContactFilter extends Component {

    state = {
        filterBy: null
    }
    componentDidMount() {

    }

    changeInput = (ev) => {
            let value = ev.target.value;
            
        this.setState( { filterBy: value } )
        this.props.onFilter(this.state.filterBy)


    }

    onFilterClick = () => {
        this.props.onFilter(this.state.filterBy)
    }

    render() {
        return <div >
            <input type="text" placeholder="name/phone" value={this.state.filterBy}
                onChange={this.changeInput} name="name"></input>
            <button onClick={this.onFilterClick}>Filter</button>

        </div>
    }
}
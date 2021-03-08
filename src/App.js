// create your App component here
import React from "react";

export default class App extends React.Component {

    state = {
        people: []
    }
    render(){
        return (
        <div>
         {this.state.people}
        </div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then (resp => resp.json())
                .then (json => this.setState({json}))
    }


 

}

    
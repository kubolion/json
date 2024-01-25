import React, {Component} from "react";
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Display from "./components/Display/Display";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navState: 'posts',
            data: []
        }
    }
    changeNavState= (title) =>{
        fetch(`https://jsonplaceholder.typicode.com/${title}`)
            .then(response => response.json())
            .then(json => console.log(json))
        this.setState(
             {
                navState: title,
                data: []
            }
        )

    }
  render() {
      console.log("render")
    return (
        <div className="container">
          <Navigation changeNav={this.changeNavState}/>
          <Display heading={this.state.navState}/>

        </div>
    );
  }

}

export default App;

import React, { Component } from "react"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import "./App.css"
import Scroll from "../components/Scroll"

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ""
    }
    this.onSearchChange = this.onSearchChange.bind(this)
    console.log('constructor');
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
      return response.json();
    })
      .then(users => {
        this.setState({robots: users})
    });
    console.log('componentDidMount');
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value})
  } 

  render() {
    console.log('render');
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1 className="tc mv7">Loading.....</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>  
        </div>
      )
    }
  }
}

export default App

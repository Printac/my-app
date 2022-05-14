import React from 'react'
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import { robots } from './robots';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ""
    }
  }

  onSearchChange = (event) =>  {
    this.setState({searchfield: event.target.value}) 
  }
  
  render(){
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      
      <div className="tc">
        <h1>RobotsProject</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  } 
}

export default App;

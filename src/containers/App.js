import React, {Component} from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestRobots } from '../Action.js';

const mapStateToProps = state => {
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

  class App extends Component  {
    //we don't need a constructor anymore because there is no state anymore
    // the robots are being returned from
    // onRequestRobots as props
 
 //   constructor(){
 //     super()
 //     this.state ={
 //      robots: [],
       // searchfield: ''
  //    }
 //   }

    componentDidMount(){
     // no longer need the fetch call, we just call the action
      this.props.onRequestRobots();

      //fetch is a method on the window object. 
      //it comes with all browsers now
      //it is a tool for us to make requests to servers
    //  fetch('https://jsonplaceholder.typicode.com/users')
     // .then(response => response.json())
    //  .then(response => {this.setState({robots: response})});
    }

 //   onSearchChange = (event) => {
 //     this.setState({searchfield: event.target.value})
  //  }

    render(){
    //  const { robots } = this.state;
      const { searchField, onSearchChange, robots, isPending } = this.props;
      let filtered = [];
      if(robots.length > 0){
       filtered = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      })
    }
      return isPending ?
        <h1>Loading...</h1> :
       (
        <div className = 'tc'>
        <h1 className='f1' >RobotFriends</h1>
        <SearchBox searchChange = {onSearchChange}/>
        <Scroll>
          <CardList robots={filtered}/>
          </Scroll>
          </div>
        );
    }
    }
  
  

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import Ninjas from './Ninjas';
class App extends Component {
  state={
    ninjas:[
     { name:'Jay', age:25 ,belt:'Black',id:1},
     { name:'Jaya', age:50, belt:'Green',id:2},
     { name:'Jay', age:20, belt:'Black',id:3}
    ]
  }
  
  render() {

    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas}></Ninjas>
      </div>
    );
  }
}
export default App;

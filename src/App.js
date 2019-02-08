import React, { Component } from 'react';
import Employee from './Employee';
import AddEmployee from './AddEmployee';

class App extends Component {
  state={
    employees:[
     { name:'Jay', age:25 ,salary:50000,id:1},
     { name:'Jaya', age:50, salary:40000,id:2},
     { name:'Raj', age:20, salary:100000,id:3}
    ]
  }
  
  render() {

    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome :)</p>
        <Employee employees={this.state.employees}></Employee>
        <AddEmployee/>
      </div>
    );
  }
}
export default App;

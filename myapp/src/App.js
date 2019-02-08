import React, { Component } from 'react';
import Employee  from './Employee';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome students</p>
        <Employee name="Jay" age="25" salary="2000"/>
        <Employee name="Jaya" age="30" salary="3000"/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Employee  from './Employee';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome students</p>
        <Employee/>
      </div>
    );
  }
}

export default App;

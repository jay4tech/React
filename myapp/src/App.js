import React, { Component } from 'react';
import Employee from './Employee';
import AddEmployee from './AddEmployee';
class App extends Component {
  state = {
    employees: [
      { name: 'Jay', age: 25, salary: 2000, id: 1 },
      { name: 'Jaya', age: 50, salary: 3000, id: 2 },
      { name: 'Raj', age: 20, salary: 4000, id: 3 }
    ]
  }
  addEmployee = (employee) => {
    console.log(employee)
    employee.id = Math.random();
    let employees = [...this.state.employees, employee]
    this.setState({
      employees: employees
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome students</p>
        <Employee employees={this.state.employees} />
        <AddEmployee addEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;

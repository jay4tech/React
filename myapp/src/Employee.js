import React, { Component } from 'react';

class Employee extends Component {
    
    render(){
        const {employees}=this.props;
        const employeeList= employees.map(employee=>{
            return(
            <div className="employee" key={employee.id}>
                <div>Name: {employee.name}</div>
                <div>Age: {employee.age}</div>
                <div>Salary:{employee.salary}</div>
                <hr/>
            </div>
            )
        })
        return(
            <div className="employee-list">
            {employeeList}
            </div>
           
        )
    }
}
export default Employee;
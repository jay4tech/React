// import React, { Component } from 'react';
import React from 'react';
// class Ninjas extends Component {
const Employee =({employees})=>{
    // render() {
        const employeeList = employees.map(employee => {
            if(employee.age>20){
            return (
                <div className="employee" key={employee.id}>
                    <div>Name : {employee.name}</div>
                    <div>Age : {employee.age}</div>
                    <div>Salary : {employee.salary}</div>
                    <hr/>
                </div>
            )
            }else{
                return null;
            }
        })
        return (
            <div className="employee-list">
                {employeeList}
            </div>
        )
    // }
}

export default Employee;
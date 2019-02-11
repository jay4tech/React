import React from 'react';

const Employee = ({ employees ,deleteEmployee}) => {
    const employeeList = employees.map(employee => {
        return (
            <div className="employee" key={employee.id}>
                <div>Name: {employee.name}</div>
                <div>Age: {employee.age}</div>
                <div>Salary:{employee.salary}</div>
                <button onClick={()=>{deleteEmployee(employee.id)}}> Delete Employee</button>
                <hr />
            </div>
        )

    })

    return (
        <div className="employee-list" >
            {
                employeeList
            }
        </div>
    )
}
export default Employee;
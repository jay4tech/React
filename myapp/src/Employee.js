import React from 'react';

const Employee = ({ employees }) => {
    // const employeeList = employees.map(employee => {
    //    if(employee.age>20){
    //    return (
    //         <div className="employee" key={employee.id}>
    //             <div>Name: {employee.name}</div>
    //             <div>Age: {employee.age}</div>
    //             <div>Salary:{employee.salary}</div>
    //             <hr />
    //         </div>
    //     )
    //    }else{
    //        return null;
    //    }
    // })

    // const employeeList = employees.map(employee => {

    //     return employee.age  < 30 ? (<div className="employee" key={employee.id}>
    //         <div>Name: {employee.name}</div>
    //         <div>Age: {employee.age}</div>
    //         <div>Salary:{employee.salary}</div>
    //         <hr />
    //     </div>) : null;
    // })
    // return (
    //     <div className="employee-list" >
    //         {employeeList}
    //     </div >

    // )

    return (
        <div className="employee-list" >
            {
                employees.map(employee => {
                    return employee.age > 20 ? (<div className="employee" key={employee.id}>
                        <div>Name: {employee.name}</div>
                        <div>Age: {employee.age}</div>
                        <div>Salary:{employee.salary}</div>
                        <hr />
                    </div>
                    ) : null;

                })
            }
        </div>
    )
}
export default Employee;
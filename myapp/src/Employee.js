import React, { Component } from 'react';

class Employee extends Component {
    
    render(){
        console.log(this.props)
        const {name,age,salary}=this.props
        return(
            <div className="employee">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Salary:{salary}</div>
                <hr/>
            </div>
        )
    }
}
export default Employee;
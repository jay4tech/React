// import React, { Component } from 'react';
import React from 'react';
// class Ninjas extends Component {
const Ninjas =({ninjas})=>{
    // render() {
        const ninjaList = ninjas.map(ninja => {
            if(ninja.age>20){
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name : {ninja.name}</div>
                    <div>Age : {ninja.age}</div>
                    <div>Belt : {ninja.belt}</div>
                </div>
            )
            }else{
                return null;
            }
        })
        return (
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
    // }
}

export default Ninjas;
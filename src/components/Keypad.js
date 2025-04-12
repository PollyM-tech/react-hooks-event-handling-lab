// Code Keypad Component Here
import React from "react";

function Keypad (){
    const handleChange =(e)=>{
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={handleChange} />
        </div>
    )
}

export default Keypad;

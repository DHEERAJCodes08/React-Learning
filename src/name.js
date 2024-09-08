//Here in This File we are Creating new Components 
import React from 'react';

function Message(props) {
    return(
        <div>
        <h1>Hey Bro {props.name}</h1>
        <h1>Your Age is {props.age}</h1>

        </div>

        
    );
    
}


export default Message;
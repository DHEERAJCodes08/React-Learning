import React from "react";

//Here we will be showing messages according to the Condition

function StatusMessage({isLoggedIn}){
    return (
        <div>
        {isLoggedIn ? <h1>Hey Your Welcome! </h1> : <h1>Please Login In! </h1>}

        </div>
    );
}

export default StatusMessage;
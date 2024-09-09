import React from 'react';

function UserDetail({user}){
    return (
        <div>
            <h4>
                Hey My Name is {user.name}
            </h4>
            <p>
                Age: {user.age}
            </p>
            <p>
                Class: {user.class}
            </p>
        </div>
    )
}

export default UserDetail;
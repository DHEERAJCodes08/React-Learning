import React, { useState } from 'react';

function UserInfo() {
  const [user, setUser] = useState({ name: 'Alice', age: 30 });

  const changeAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Age: {user.age}</p>
      <button onClick={changeAge}>Increase Age</button>
    </div>
  );
}

export default UserInfo;

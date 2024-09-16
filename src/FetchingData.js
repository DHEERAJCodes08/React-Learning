import React, { useState, useEffect } from "react";

function FetchingData(data) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API request
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  });

  return (
    <div>
      <h1>Users List</h1>
      {loading ? (
        // Render loading message if loading is true
        <p>Loading users...</p>
      ) : (
        // Render list of users once loading is false
        <ul>
          {users.map(user => (
            <li key={user.id}>
             {user.id}- {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchingData;

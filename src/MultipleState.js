import React, { useState } from "react";

function MulState() {
  const [name, setName] = useState("John Cena");
  const [age, setAge] = useState(20);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => setName("Tom Cook")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}

export default MulState;
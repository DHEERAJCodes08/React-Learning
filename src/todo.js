import React, { useState, useEffect } from "react";

function TodoApp() {
  const [todo, settodo] = useState([]);
  const [text, settext] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    if (text.length > 0) {
      settodo([...todo, text]);
      settext(""); // Clear the input field after adding
    } else {
      alert("Please enter a value");
    }
  };

  //Effects to log todo When ever they are Changed
  useEffect(() => {
    console.log("Here is the todo List", todo);
  }, [todo]);

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={text}
          placeholder="Enter the Name"
          onChange={(e) => settext(e.target.value)}
        ></input>
        <button type="submit">Add Name</button>
      </form>

      <ul>
        {todo.map((todo, index) => (
          <li className="todo" key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

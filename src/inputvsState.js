//2. Handling Input with State
import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");
  return (  
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type Something?"
      />

      <p>You typed: {text}</p>
    </div>
  );
}

export default TextInput;

//This is the File Where we Are Structing and assembling the components!

// const troops = <h1>Hello World!</h1>;
import React from "react";
import Button from "./Button";
import StatusMessage from "./StatusMessage";
import Message from "./name";
import Container from "./ChildComp";
function App() {
  return (
    <div>


  
      <Message name="John" age={30} />
      <Button label="Hii" />
      <Button label="Hello " />
      <Button label=" World" />

      <div>
        <StatusMessage isLoggedIn={false} />
        <StatusMessage isLoggedIn={true} />
      </div>

      <div>
      <Container>
        <h1>This is inside the container</h1>
      </Container>
    </div>
    </div>
  );
}

export default App;

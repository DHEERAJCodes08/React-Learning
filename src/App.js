//This is the File Where we Are Structing and assembling the components!

// const troops = <h1>Hello World!</h1>;
import React from "react";
import Button from "./Button";
import StatusMessage from "./StatusMessage";
import Message from "./name";
import Container from "./ChildComp";
import Greeting from "./Greeting";
import UserDetail from "./UserCard";
import Btnclicked from "./Buttonclick";
import Card from "./PropChild";
import Counter from "./Counter";
import TextInput from "./inputvsState";
import ToogleState from "./ToogleStates";
import MulState from "./MultipleState";
import ListItemComponent from "./ArrayState";
import UserInfo from "./ObjectState";
import ShowHideText from "./ConditionalState";

function App() {
  const user = {
    name: "Superman",
    age: "45",
    class: "12th",
  };

  function handleClick() {
    alert("Btn clicked");
  }
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

      <div>
        <Greeting name="Dheeraj" />
      </div>

      <div>
        <UserDetail user={user} />
      </div>

      <div>
        <Btnclicked handleClick={handleClick} />
      </div>

      <div>
        <Card title="Card 1">
          <p>This is the content of the first card.</p>
        </Card>
        <Card title="Card 2">
          <p>This is the content of the second card.</p>
        </Card>
      </div>

      <hr />
      <br />
      <div>
        <h2>My Counter app</h2>
        <Counter />
      </div>
      <div>
        <h2>My Input app</h2>
        <TextInput />
      </div>
      <div>
        <ToogleState />
      </div>
      <div>
        <MulState />
      </div>
      <div>
        <ListItemComponent />
      </div>
      <div>
        <UserInfo />
      </div>
      <div>
        <ShowHideText />
      </div>
    </div>
  );
}

export default App;

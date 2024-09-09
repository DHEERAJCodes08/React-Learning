import React, { useState } from "react";

function ToogleState() {
  const [isOn, setOn] = useState(false);
  if (isOn) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "green";
  }
  return <button onClick={() => setOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>;
}

export default ToogleState;

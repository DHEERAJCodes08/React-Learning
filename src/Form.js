import React, { useState } from "react";

function RegistrationForm() {
  const [formdata, setformdata] = useState({
    name: "",
    passward: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  }

  function handlesubmit(event) {
    event.preventDefault();

    console.log("Registration form Subbmited ", formdata);
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handlesubmit}>
        {/* This is name */}
        <div>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={handlechange}
              value = {formdata.name}
            />
          </label>
        </div>
        {/* This is Password */}
        <div>
          <label>
            Password
            <input
              type="password"
              name="passward"
              placeholder="password"
              onChange={handlechange}
              value={formdata.passward}
            />
          </label>
        </div>
        {/* This is Submit Btn */}
        <div>
          <button type="submit">Done</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;

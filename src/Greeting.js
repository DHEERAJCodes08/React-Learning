import React from "react";

function Greeting(props) {
    return <h4>Bhai{props.name} Kaisa Hai Tu </h4>
}


Greeting.defaultProps = {
    name: "Sammer",
};
export default Greeting;
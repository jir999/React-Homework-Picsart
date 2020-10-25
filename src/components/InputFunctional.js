import React, { useState, useEffect, useRef } from "react";

import "./input.css";

function InputFunctional(props) {
  const [value, setValue] = useState(234567);
  const [state, setState] = useState("");

  const onChange = (event) => setValue(event.target.value);

  useEffect(() => {
    setState("test");
  }, [value]);

  return (
    <div>
      Functional Component
      <input value={value} className="input" onChange={onChange} />
    </div>
  );
}

function HOC(Component) {
  return (props) => <Component {...props} />;
}

export default InputFunctional;

const HOCedInputFunctional = HOC(InputFunctional);

// HOC

// Input -> ValidatableInput
// TextInput -> ValidatableTextInput
// Validatable

// render -> effect -> commit DOM
// render -> effect -> commit DOM

import React from "react";

import Input from "./components/Input";
import InputFunctional from "./components/InputFunctional";

import "./styles.css";

export default class App extends React.Component {
  state = {
    type: "number"
  };

  componentDidMount() {
    setTimeout(() => {
      // this.setState({ type: "text" });
    }, 1000);
  }

  onInterval(id) {
    this.id = id;
  }

  render() {
    const { type } = this.state;

    return (
      <div className="App">
        {<Input type={type} />}
        <InputFunctional />
      </div>
    );
  }
}

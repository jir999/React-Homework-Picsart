import React from "react";

import "./input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 234567
    };

    this.ref = React.createRef(null);
  }

  componentDidMount() {
    this.setState({ value: 1111 });
  }

  onChange = (event) => {
    if (event.target.value.length < 10) {
      this.setState({
        value: event.target.value
      });
    }
  };

  onBlur = () => {
    console.log(this.ref.current.value);
  };

  render() {
    // console.log(this.ref);
    return (
      <div>
        Class component
        <input
          ref={this.ref}
          className="input"
          // value={this.state.value}
          // onChange={this.onChange}
          onBlur={this.onBlur}
        />
      </div>
    );
  }
}

export default Input;

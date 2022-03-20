import React, { PureComponent } from "react";

export class Fruits extends PureComponent {
  // Pure Component || to get that, type "rpce"
  constructor(props) {
    super(props);
    this.state = {
      mobile: "Nokia"
    };
  }
  ChangeMobile = (e) => {
    this.setState({
      mobile: e.target.value
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.mobile}</div>
        <div>
          <input type="text" onChange={this.ChangeMobile} />
        </div>
      </div>
    );
  }
}

export default Fruits;

import React, { PureComponent } from "react";

export class Fruits extends PureComponent {
  // Pure Component || to get that, type "rpce"
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  ChangeMobile = (event) => {
    let value = event.target.name;
    let getting_value = event.target.value;
    this.setState({ [value]: getting_value });
  };
  render() {
    return (
      <div>
        <div>{this.state.username} aa</div>
        <div>
          <form action="#">
            <input name="username" type="text" onChange={this.ChangeMobile} />
          </form>
        </div>
      </div>
    );
  }
}

export default Fruits;

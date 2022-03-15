import React, { PureComponent } from "react";

export class TwoWayDataBinding extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sub: "Enter something"
    };
  }

  ChangeSub = (event) => {
    this.setState({
      sub: event.target.value
    });
  };

  render() {
    return (
      <div>
        <hr />
        <div>
          <input
            type="text"
            onChange={this.ChangeSub}
            placeholder={this.state.sub}
          />
          <p>{this.state.sub}</p>
        </div>
      </div>
    );
  }
}

export default TwoWayDataBinding;

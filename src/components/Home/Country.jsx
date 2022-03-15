import React, { PureComponent } from "react";

export class Country extends PureComponent {
  // Pure Component || to get that, type "rpce"
  // States
  constructor(props) {
    super(props);
    this.state = {
      country: [
        { name: "bangladesh" },
        { name: "afganstan" },
        { name: "pakistan" },
        { name: "india" }
      ]
    };
  }
  Change = () => {
    this.setState({
      country: [
        { name: "Bangladesh" },
        { name: "Afganstan" },
        { name: "Pakistan" },
        { name: "India" }
      ]
    });
  };
  render() {
    // if we want to use simple javascript function then we have to write into render(){} method

    // function Change(params) {
    //   alert();
    // }

    return (
      <div>
        <div>
          <hr />
          <button onClick={this.Change}>Click Me</button>
          <p>Country: {this.state.country[0].name}</p>
          <p>Country: {this.state.country[2].name}</p>
          <p>Country: {this.state.country[3].name}</p>
        </div>
      </div>
    );
  }
}

export default Country;

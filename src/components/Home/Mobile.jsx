import React, { PureComponent } from "react";

export class Fruits extends PureComponent {
  // Pure Component || to get that, type "rpce"
  constructor(props) {
    super(props);
    this.state = {
      mobile_name: "",
      ram: "",
      rom: "",
      camera: "",
      mobileError: ""
    };
  }
  // validate data
  validate() {
    if (!this.state.mobile_name > 0) {
      this.setState({ mobileError: "Mobile name required" });
    } else {
      return true;
    }
  }

  ChangeMobile = (event) => {
    let value = event.target.name;
    let getting_value = event.target.value;
    this.setState({ [value]: getting_value });
  };

  SubmitForm = (e) => {
    e.preventDefault();
    if (this.validate()) {
      alert("validation success");
    }
  };
  render() {
    return (
      <div>
        <div>Mobile Name: {this.state.mobile_name}</div>
        <div>Mobile Ram: {this.state.ram}</div>
        <div>Mobile Rom: {this.state.rom}</div>
        <div>Mobile Camera: {this.state.camera}</div>
        <div>
          <form onSubmit={this.SubmitForm}>
            <label htmlFor="">Mobile Name</label>
            <input
              name="mobile_name"
              type="text"
              onChange={this.ChangeMobile}
            />
            <br />
            <span style={{ color: "red" }}>{this.state.mobileError}</span>
            <br />
            <label htmlFor="">Ram</label>
            <input name="ram" type="text" onChange={this.ChangeMobile} />
            <br />
            <label htmlFor="">Rom</label>
            <input name="rom" type="text" onChange={this.ChangeMobile} />
            <br />
            <label htmlFor="">Camera</label>
            <input name="camera" type="text" onChange={this.ChangeMobile} />
            <br />
            <br />
            <button type="submit">Submit Form</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Fruits;

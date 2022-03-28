import React, { PureComponent } from "react";

export class Fruits extends PureComponent {
  // Pure Component || to get that, type "rpce"
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      ram: "",
      rom: "",
      camera: ""
    };
  }
  ChangeMobile = (event) => {
    let value = event.target.name;
    let getting_value = event.target.value;
    this.setState({ [value]: getting_value });
  };

  SubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.username);
  };
  render() {
    return (
      <div>
        <div>Mobile Name: {this.state.username}</div>
        <div>Mobile Ram: {this.state.ram}</div>
        <div>Mobile Rom: {this.state.rom}</div>
        <div>Mobile Camera: {this.state.camera}</div>
        <div>
          <form onSubmit={this.SubmitForm}>
            <label htmlFor="">Mobile Name</label>
            <input name="username" type="text" onChange={this.ChangeMobile} />
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

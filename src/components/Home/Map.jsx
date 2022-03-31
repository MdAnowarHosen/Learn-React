import React, { PureComponent } from "react";

export class Map extends PureComponent {
  // Pure Component || to get that, type "rpce"

  render() {
    // countries
    const countries = ["Bangladesh", "Afganstan", "Pakistan", "Arabia"];
    const countries_map = countries.map((item, index) => {
      return <li>{item}</li>;
    });

    // students info || object array
    const students = [
      { name: "Anas", age: "23", roll: "101" },
      { name: "Anowar", age: "23", roll: "102" },
      { name: "Jony", age: "23", roll: "103" },
      { name: "Anowar Hosen", age: "23", roll: "104" }
    ];
    const student = students.map((item, index) => {
      return (
        <li>
          Name: {item.name} Age: {item.age} Roll: {item.roll}
        </li>
      );
    });
    return (
      <div>
        <ul>{countries_map}</ul>
        <ul>{student}</ul>
      </div>
    );
  }
}

export default Map;

import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";
export default class DemoProps extends Component {
  state = {
    ten: "Trịnh Hải Nguyên",
    lop: 51,
  };
  render() {
    return (
      <div>
        <h1>Props</h1>
        {/* Cách truyền props trong reactjs */}
        <FunctionProps
          hoVaTen={this.state.ten}
          lopCuaTui={this.state.lop}
        ></FunctionProps>
        <ClassProps
          hoVaTen={this.state.ten}
          lopCuaTui={this.state.lop}
        ></ClassProps>
      </div>
    );
  }
}

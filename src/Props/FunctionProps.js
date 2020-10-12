import React from "react";

export default function FunctionProps(props) {
  console.log(props);
  return (
    <div>
      <h3>FunctionProps</h3>
      <p>Tên: {props.hoVaTen}</p>
      <p>Lớp: {props.lopCuaTui}</p>
    </div>
  );
}

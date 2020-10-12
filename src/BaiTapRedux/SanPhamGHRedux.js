import React, { Component } from "react";

export default class SanPhamGHRedux extends Component {
  render() {
    console.log(this.props)
     return (
      <tr>
        <td>{this.props.sanPham.maSP}</td>
        <td>{this.props.sanPham.tenSP}</td>
        <td>
          <img src={this.props.sanPham.hinhAnh} width={50} height={50} />
        </td>
        <td>1</td>
        <td>1000</td>
        <td>1000</td>
        <td>
          <button className="btn btn-danger">Xoá</button>
        </td>
      </tr>
    );
  }
}

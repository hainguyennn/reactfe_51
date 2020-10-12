import React, { Component } from "react";

export default class DemoListAndKey extends Component {
  danhSachKhoaHoc = ["NodeJS", "ReactJS", "VueJS"];
  // Chỉ có mảng mới .map() dc còn object thì không được, map thì trả về mảng còn foreach không trả gì hết
  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li key={index}>{khoaHoc}</li>;
    });
  };

  //   renderDanhSachKhoaHoc = () =>
  //     // => dấu này là return, cách này nâng cao
  //     this.danhSachKhoaHoc.map((khoaHoc, index) => <li>{khoaHoc}</li>);
  render() {
    return (
      <div>
        <h2>List and Key</h2>
        <h3>Danh Sách Khoá Học</h3>
        <ul>
          {/* <li>NodeJS</li>
          <li>ReactJS</li>
          <li>VueJS</li> */}
          {this.renderDanhSachKhoaHoc()}
        </ul>
      </div>
    );
  }
}

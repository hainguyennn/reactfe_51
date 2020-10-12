import React, { Component } from "react";

export default class DemoConditionalAndState extends Component {
  /**
   * isLogin là thuộc tính của class
   *      true: Đã login => Hiện tên người dùng
   *      false: Chưa login => hiện nút login
   */

  state = {
    // state không được đổi, lấy bên react có sẵn r xài
    isLogin: false,
  };

  // isLogin = false; => cách này sai vì render không chạy lại

  // Phương thức của class

  handleLogin = () => {
    console.log("run");
    // this.isLogin = true;
    // this.state.isLogin = true; => cách này sai vì render không chạy lại
    this.setState({
      isLogin: true,
    });
  };
  renderLogin = () => {
    if (this.state.isLogin) {
      // Đúng: Hiện tên người dùng
      return <p>Trịnh Hải Nguyên</p>;
    } else {
      // Sai: hiện nút login
      return <button onClick={this.handleLogin}>Login</button>;
    }
  };

  // render là phương thức cập nhập lại giao diện
  render() {
    console.log("Run Render");
    return (
      <div>
        <h2>Conditional And State</h2>
        {/* // if(this.isLogin){ // Báo lỗi do đây không phải là phương thức
                        
                    // }else{

                    // } */}
        {this.renderLogin()}
        {/*do là phương thức nên có dấu () chứ k phải thuộc tính */}
      </div>
    );
  }
}

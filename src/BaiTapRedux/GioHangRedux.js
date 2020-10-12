import React, { Component } from "react";
import SanPhamGHRedux from "./SanPhamGHRedux";

// import thư viện kết nối react component và redux store
import { connect } from "react-redux";
class GioHangRedux extends Component {
  renderGioHang = () => {
    return <SanPhamGHRedux />;
  };

  render() {
    console.log("props", this.props);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sp</th>
            <th>Tên sp</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
    );
  }
}
// Lấy state từ redux store biến thành props của component
// Tham số state: Đại diện cho rootReducer
const mapStateToProps = (state) => {
  return {
    gioHang: state.StateBaiTapGioHang.gioHang,
  };
};

export default connect(mapStateToProps)(GioHangRedux); // Kết nối giữa giohangReduxComponent và redux store

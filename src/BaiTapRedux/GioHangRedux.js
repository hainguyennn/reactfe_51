import React, { Component } from "react";
import danhSach from '../Components/BaiTapGioHang/data.json'
import SanPhamGHRedux from "./SanPhamGHRedux";

// import thư viện kết nối react component và redux store
import { connect } from "react-redux";
class GioHangRedux extends Component {
  renderGioHang = () => {
     return  this.props.gioHang.map((spGioHang,index) => {
      //  return  <SanPhamGHRedux key={index} sanPham={spGioHang} />
      return <tr key={index}>
        <td>{spGioHang.maSP}</td>
        <td>{spGioHang.tenSP}</td>
        <td><img src={spGioHang.hinhAnh} width={50}/></td>
        <td><button onClick={() => {
          this.props.tangGiamSoLuong(spGioHang.maSP,true)
        }} className="btn btn-dark">+</button>{spGioHang.soLuong}<button onClick={() => {
          this.props.tangGiamSoLuong(spGioHang.maSP,false)}} className="btn btn-dark">-</button></td>
        <td>{spGioHang.giaBan}</td>
        <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
        <td><button onClick={() => {this.props.xoaGioHang(spGioHang.maSP)}} className="btn btn-danger">Xoá</button></td>
      </tr>
     })
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

// Tạo ra 1 props là hàm đưa giá trị lên reducer => để set lại state
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      console.log(maSPClick);
      // Tạo ra action gửi lên reducer
      const action = {
        type: 'XOA_GIO_HANG',
        maSPClick
      }
      // Dùng hàm dispatch đưa lên reducer
      dispatch(action);
    },
    tangGiamSoLuong : (maSP,tangGiam) => {
      // Tạo ra action 
      const action = {
        type: 'TANG_GIAM_SO_LUONG',
        maSP,
        tangGiam
      }
      // Dispatch lên reducer
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux); // Kết nối giữa giohangReduxComponent và redux store

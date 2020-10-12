import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;

    return (
      <div className="card text-left">
        <img
          style={{ width: "100%", height: 300 }}
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt={sanPham.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
          <button onClick={() => {
            // Gọi hàm được tạo ra từ mapDispatchToProps
            this.props.themGioHang(sanPham);
          }} className="btn btn-danger">Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}

// Hàm lấy state từ redux biến thành props component
const mapStateToProps = (state) => {
  return {}
}
// Hàm tạo ra 1 hàm xử lý để đưa giá trị lên redux, giống setState
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamCLick) => {
      // Từ sản phẩm được click => tạo ra sp giỏ hàng
      let spGH = {...sanPhamCLick,soLuong: 1};
      // Để gửi giá trị lên reducer cần 1 object có thuộc tính type để phân biệt state nào thay đổi

      let action = { //action: dữ liệu gửi đi
        type: 'THEM_GIO_HANG', // Thuộc tính bắt buộc
        spGH : spGH
      }

      // Dùng hàm dispatch mà redux cung cấp, đưa action lên reducer
      dispatch(action);
      console.log(sanPhamCLick);
    }
  }
}
// Tham số 1 hàm connect là 1 hàm(callbackFunction): Lấy giá trị từ reducer về
// Tham số 2 hàm connect là 1 hàm (callbackFunction): Đưa các giá trị lên reducer
export default connect(mapStateToProps,mapDispatchToProps,)(SanPhamRedux);

// import BaiTapGioHangRedux from "../../BaiTapRedux./BaiTapGioHangRedux";

// Giá trị ban đầu của state
const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      hinhAnh: "https://picsum.photos/50",
      soLuong: 1,
      donGia: 1000,
    },
  ],
};

// Hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefault, action) => {
  return { ...state };
};

export default BaiTapGioHangReducer;

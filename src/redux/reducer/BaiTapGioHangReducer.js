// import BaiTapGioHangRedux from "../../BaiTapRedux./BaiTapGioHangRedux";

// Giá trị ban đầu của state
const stateDefault = {
  gioHang: [
    // {
    //   maSP: 1,
    //   tenSP: "Iphone",
    //   hinhAnh: "https://picsum.photos/50",
    //   soLuong: 1,
    //   donGia: 1000,
    // },
  ],
};

// Hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefault, action) => {
  switch(action.type){
    case 'THEM_GIO_HANG': {
      // Xử lý cập nhật lại state
      let gioHangUpdate = [...state.gioHang];
      // Tìm sp có trong giỏ hàng hay không
      const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.spGH.maSP);
      if(index !== -1){
        gioHangUpdate[index].soLuong += 1;
      }else{
        gioHangUpdate.push(action.spGH);
      }
      // Gán lại state cũ = giá trị mới
      state.gioHang = gioHangUpdate;
      return {...state};
    }
    case 'XOA_GIO_HANG' : {
      let gioHangUpdate = [...state.gioHang];
      // Xử lý xoá giỏ hàng dựa vào action = {
      //   type: 'XOA_GIO_HANG',
      //   maSPClick
      // } được gửi lên từ mapDispatch
      const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSPClick);
      if(index !== -1){
        gioHangUpdate.splice(index,1);
      }
      // Cập nhật lại state.gioHang
      state.gioHang = gioHangUpdate;
      return {...state};
    }
    case 'TANG_GIAM_SO_LUONG' : {
      let gioHangUpdate = [...state.gioHang];
      // TÌm ra sp có mã ứng với sp trong giỏ hàng tiến hành tăng giảm
      let spGioHang = gioHangUpdate.find(sp => sp.maSP === action.maSP);
      if(spGioHang){ // spGioHang !== undefine
        // nếu mã sp có trong sp giỏ hàng thì thực hiện tăng giảm
        if(action.tangGiam){
          spGioHang.soLuong += 1;
        }else{
          if(spGioHang.soLuong > 1){
            spGioHang.soLuong -= 1;
          }
        }
        // Cập nhật lại state giỏ hàng
        state.gioHang = gioHangUpdate;
        return {...state};
      }
    }
  }
  return {...state};
};

export default BaiTapGioHangReducer;

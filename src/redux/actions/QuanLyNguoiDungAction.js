import { SUA_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../constants/QuanLyNguoiDungConst"

// Định nghĩa action để các component trong ứng dụng muốn gọi nghiệp vụ này thì import vào gọi
export const xoaNguoiDungAction = (maNguoiDung) => {
    return {
        type: XOA_NGUOI_DUNG,
        maNguoiDung
    }
}

// Định nghĩa action chỉnh sửa người dùng
export const suaNguoiDungAction = (nguoiDung) => {
    return {
        type: SUA_NGUOI_DUNG,
        nguoiDungChinhSua: nguoiDung
    }
}

import { SUA_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../constants/QuanLyNguoiDungConst";

const stateDefault = {
    mangNguoiDung: [
        { maNguoiDung: 1, tenNguoiDung: 'Trịnh Hải Nguyên', soDienThoai: '090909090', email: 'hai34739@gmail.com' },
        { maNguoiDung: 2, tenNguoiDung: 'Trịnh Công Sơn', soDienThoai: '1231212121', email: 'CongTrinh222@gmail.com' }
    ],
    nguoiDungChinhSua: {
        maNguoiDung: '', tenNguoiDung: '', soDienThoai: '', email: ''
    },
    stateForm: {
        value: {
            maNguoiDung: '',
            tenNguoiDung: '',
            soDienThoai: '',
            email: ''
        },
        error: {
            maNguoiDung: '',
            tenNguoiDung: '',
            soDienThoai: '',
            email: ''
        },
        maNguoiDungXoa: ''
    }
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case XOA_NGUOI_DUNG: {
            let mangNguoiDungCapNhat = [...state.mangNguoiDung];

            // Cách 1: cơ bản

            // let index = mangNguoiDungCapNhat.findIndex((nguoiDung => nguoiDung.maNguoiDung === action.maNguoiDung));
            // if (index !== -1) {
            //     mangNguoiDungCapNhat.splice(index, 1);
            // }
            // state.mangNguoiDung = mangNguoiDungCapNhat;
            // return { ...state }

            // Cách 2: Nâng cao (hàm filter): Lấy ra giá trị !== giá trị cần xoá
            // Ví dụ: trong mảng có 15 6 7 8. Xoá số 6, thì hàm filter sẽ lấy ra những giá trị !== số cần xoá là 15 7 8

            mangNguoiDungCapNhat = mangNguoiDungCapNhat.filter(nguoiDung => nguoiDung.maNguoiDung != action.maNguoiDung);
            state.mangNguoiDung = mangNguoiDungCapNhat;
            return { ...state }
        }
        case SUA_NGUOI_DUNG: {
            // Lấy người dùng được click từ nút sửa
            let nguoiDungDuocClick = { ...action.nguoiDungChinhSua };

            // Cập nhật state người dùng chỉnh sửa = người dùng đươc click
            state.nguoiDungChinhSua = nguoiDungDuocClick;

            // Xử lý theo cách 2 <NewFormComponent />
            state.stateForm = { ...state.stateForm, value: nguoiDungDuocClick };
            return { ...state }
        }
        case 'HANDLE_CHANGE_INPUT': {
            state.stateForm = { ...action.newState };
            return { ...state }
        }
        case 'CAP_NHAT_THONG_TIN': {
            // CẬp nhật lại thông tin người dùng trong mảng
            let mangNguoiDungCapNhat = [...state.mangNguoiDung];
            let index = mangNguoiDungCapNhat.findIndex(nd => nd.maNguoiDung === action.nguoiDungCapNhat.maNguoiDung);
            // Cập nhật thông tin của vị trí người dùng đó = người dùng mới
            mangNguoiDungCapNhat[index] = action.nguoiDungCapNhat;
            state.mangNguoiDung = mangNguoiDungCapNhat;
            return { ...state }
        }
        case 'THEM_NGUOI_DUNG': {
            const mangNguoiDungCapNhat = [...state.mangNguoiDung, action.nguoiDung];
            state.mangNguoiDung = mangNguoiDungCapNhat;
            return { ...state }
        }
        default: return { ...state }
    }
}
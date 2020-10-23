import React, { Component } from 'react'
import sweetalert from 'sweetalert2';
import { connect } from 'react-redux'
import { xoaNguoiDungAction } from '../redux/actions/QuanLyNguoiDungAction';

class NewFormComponent extends Component {

    handleChangeInput = (event) => {
        // Lấy ra name và value
        // target là thẻ đó
        let { name, value } = event.target;

        // Lấy ra attribute types (các thuộc tính trên thẻ tự thêm gọi là attribute)
        let types = event.target.getAttribute('types');

        // Xử lý value
        let newValues = { ...this.props.stateForm.value }; // Tạo ra value mới giá trị = value cũ
        newValues[name] = value;

        // Xử lý error
        let newErrors = { ...this.props.stateForm.error };
        newErrors[name] = value.trim() === '' ? 'Không được bỏ trống' : '';

        //Validation các trường đặc biệt
        if (types === 'phoneNumber') {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = 'Dữ liệu phải là số!';
            }
        }
        if (types === 'email') {
            const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value.trim())) {
                newErrors[name] = 'Email không hợp lệ';
            }
        }


        // this.setState({
        //     value: newValues, // Gán value = value mới
        //     error: newErrors
        // }, () => {
        //     console.log(this.props.stateForm)
        // })
        // this.setState({
        //     // maNguoiDung giống name nên ghi là [name] ES6
        //     [name]: value
        // }, () => {
        //     console.log(this.props.stateForm)
        // });

        let action = {
            type: 'HANDLE_CHANGE_INPUT',
            newState: {
                value: newValues,
                error: newErrors
            }
        }

        // Gửi lên reducer stateForm mới 
        this.props.dispatch(action)

    }

    // Giải pháp 1 sử dụng lifecycle componentWillReceiveProps

    render() {
        // Lấy giá trị từ QuanLyNguoiDungReducer.nguoiDungChinhSua về render lên các value
        // let { maNguoiDung, tenNguoiDung, soDienThoai, email } = this.props.nguoiDungChinhSua;
        let { maNguoiDung, tenNguoiDung, soDienThoai, email } = this.props.stateForm.value;

        return (
            <form className="card" onSubmit={(event) => {
                // Cản sự kiện submit lại trang của browser
                event.preventDefault();
                let valid = true;
                // Duyệt thuộc tính trong object values (duyệt thuộc tính trong đối tượng thì dùng ES6 for in)
                for (let tenThuocTinh in this.props.stateForm.value) {
                    if (this.props.stateForm.value[tenThuocTinh].trim() === '') {
                        valid = false;
                    }
                }

                // DUyệt lỗi => tất cả lỗi phải = rỗng
                for (let tenThuocTinh in this.props.stateForm.error) {
                    if (this.props.stateForm.error[tenThuocTinh].trim() !== '') {
                        valid = false;
                    }
                }

                if (!valid) {
                    // alert('Dữ liệu không hợp lệ!');
                    sweetalert.fire('Thông báo', 'Dữ liệu không hợp lệ!', 'error');
                    return; // Chặn sự kiện submit
                }
                sweetalert.fire('Thông báo', 'Thêm người dùng thành công', 'success');
                console.log('submit');

                let action = {
                    type: 'THEM_NGUOI_DUNG',
                    nguoiDung: this.props.stateForm.value
                }
                this.props.dispatch(action)
            }}>

                <div className="card text-left">
                    <div className="card-header bg-dark text-light font-weight-bold"><span>THÔNG TIN NGƯỜI DÙNG</span></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <span>Mã người dùng</span>
                                    {/* event sự kiện đại diện cho thẻ này */}
                                    <input value={maNguoiDung} className="form-control" name="maNguoiDung" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.props.stateForm.error.maNguoiDung}</p>
                                </div>
                                <div className="form-group">
                                    <span>Tên người dùng</span>
                                    <input value={tenNguoiDung} className="form-control" name="tenNguoiDung" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.props.stateForm.error.tenNguoiDung}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <span>Số điện thoại</span>
                                    <input types="phoneNumber" value={soDienThoai} className="form-control" name="soDienThoai" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.props.stateForm.error.soDienThoai}</p>
                                </div>
                                <div className="form-group">
                                    <span>Email</span>
                                    <input types="email" value={email} className="form-control" name="email" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.props.stateForm.error.email}</p>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-info mx-2">Thêm người dùng</button>
                                <button onClick={() => {
                                    let action = {
                                        type: 'CAP_NHAT_THONG_TIN',
                                        nguoiDungCapNhat: this.props.stateForm.value
                                    }
                                    this.props.dispatch(action)
                                }} className="btn btn-dark mx-2">Cập nhật thông tin</button>
                            </div>

                            <div className="col-12">
                                <input onChange={(e) => {
                                    this.setState({
                                        maNguoiDungXoa: e.target.value
                                    })
                                }} name="maNguoiDungXoa" placeholder="Nhập vào mã sinh viên cần xoá" className="form-control" />
                                <button type="button" onClick={() => {
                                    // dispatch mã người dùng lên reducer XOA_NGUOI_DUNG
                                    // let action = {
                                    //     type: 'XOA_NGUOI_DUNG',
                                    //     maNguoiDung: this.props.stateForm.maNguoiDungXoa
                                    // }
                                    this.props.dispatch(xoaNguoiDungAction(this.props.stateForm.maNguoiDungXoa))
                                }} className="btn btn-danger">Xoá</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

// Viết hàm lấy state nguoiDungChinhSua từ reducer về component load lên các thẻ input

const mapStateToProps = (state) => {
    return {
        nguoiDungChinhSua: state.QuanLyNguoiDungReducer.nguoiDungChinhSua,
        stateForm: state.QuanLyNguoiDungReducer.stateForm // Lấy state form từ redux về => binding lên hàm render
    }
}


export default connect(mapStateToProps)(NewFormComponent)

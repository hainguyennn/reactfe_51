import React, { Component } from 'react'
import sweetalert from 'sweetalert2';

export default class FormComponent extends Component {

    state = {
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
        }
    }

    handleChangeInput = (event) => {
        // Lấy ra name và value
        // target là thẻ đó
        let { name, value } = event.target;

        // Lấy ra attribute types (các thuộc tính trên thẻ tự thêm gọi là attribute)
        let types = event.target.getAttribute('types');

        // Xử lý value
        let newValues = { ...this.state.value }; // Tạo ra value mới giá trị = value cũ
        newValues[name] = value;

        // Xử lý error
        let newErrors = { ...this.state.error };
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


        this.setState({
            value: newValues, // Gán value = value mới
            error: newErrors
        }, () => {
            console.log(this.state)
        })
        // this.setState({
        //     // maNguoiDung giống name nên ghi là [name] ES6
        //     [name]: value
        // }, () => {
        //     console.log(this.state)
        // });

    }

    render() {
        return (
            <form className="card" onSubmit={(event) => {
                // Cản sự kiện submit lại trang của browser
                event.preventDefault();
                let valid = true;
                // Duyệt thuộc tính trong object values (duyệt thuộc tính trong đối tượng thì dùng ES6 for in)
                for (let tenThuocTinh in this.state.value) {
                    if (this.state.value[tenThuocTinh].trim() === '') {
                        valid = false;
                    }
                }

                // DUyệt lỗi => tất cả lỗi phải = rỗng
                for (let tenThuocTinh in this.state.error) {
                    if (this.state.error[tenThuocTinh].trim() !== '') {
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
            }}>

                <div className="card text-left">
                    <div className="card-header bg-dark text-light font-weight-bold"><span>THÔNG TIN NGƯỜI DÙNG</span></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <span>Mã người dùng</span>
                                    {/* event sự kiện đại diện cho thẻ này */}
                                    <input value={this.state.value.maNguoiDung} className="form-control" name="maNguoiDung" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.error.maNguoiDung}</p>
                                </div>
                                <div className="form-group">
                                    <span>Tên người dùng</span>
                                    <input value={this.state.value.tenNguoiDung} className="form-control" name="tenNguoiDung" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.error.tenNguoiDung}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <span>Số điện thoại</span>
                                    <input types="phoneNumber" value={this.state.value.soDienThoai} className="form-control" name="soDienThoai" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.error.soDienThoai}</p>
                                </div>
                                <div className="form-group">
                                    <span>Email</span>
                                    <input types="email" value={this.state.value.email} className="form-control" name="email" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.error.email}</p>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-info">Thêm người dùng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

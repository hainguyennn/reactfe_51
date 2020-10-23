import React, { Component } from 'react'
import FormComponent from './FormComponent'
import { connect } from 'react-redux'
import { suaNguoiDungAction, xoaNguoiDungAction } from '../redux/actions/QuanLyNguoiDungAction';
import NewFormComponent from './NewFormComponent';

class DanhSachNguoiDung extends Component {

    renderMangNguoiDung = () => {
        return this.props.mangNguoiDung.map((nguoiDung, index) => {
            return (
                <tr key={index}>
                    <td>{nguoiDung.maNguoiDung}</td>
                    <td>{nguoiDung.tenNguoiDung}</td>
                    <td>{nguoiDung.soDienThoai}</td>
                    <td>{nguoiDung.email}</td>
                    <td>
                        <button onClick={() => {
                            // Tạo ra action từ người dùng được click
                            let action = suaNguoiDungAction(nguoiDung);
                            // Dispatch action nguoiDungChinhSua lên reducer
                            this.props.dispatch(action);
                        }} className="btn btn-info mx-2">Sửa</button>
                        <button onClick={() => {
                            // Gọi hàm trong mapDispatchToProps

                            // Hàm này khi sử dụng connect với redux sẽ tự có props này
                            // let action = {
                            //     type: 'XOA_NGUOI_DUNG',
                            //     maNguoiDung: nguoiDung.maNguoiDung
                            // }
                            this.props.dispatch(xoaNguoiDungAction(nguoiDung.maNguoiDung))
                        }} className="btn btn-danger mx-2">Xoá</button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="container">
                {/* <FormComponent /> */}
                <NewFormComponent />
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Mã người dùng</th>
                            <th>Tên người dùng</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMangNguoiDung()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangNguoiDung: state.QuanLyNguoiDungReducer.mangNguoiDung
    }
}

export default connect(mapStateToProps, null)(DanhSachNguoiDung)



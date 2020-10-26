import React from 'react'
import { connect, useSelector } from 'react-redux'
export default function XucXacF(props) {
    // useSelector là hook thay thế cho phương thức mapStateToProps của react-redux
    // useSelector dùng để kết nối đến reducer lấy về state
    // const mangXucXac = useSelector(state => state.stateBaiTapGameXucXac.mangXucXac);

    const { mangXucXac } = useSelector(state => state.stateBaiTapGameXucXac);
    const renderXucXac = () => {
        return mangXucXac.map((xx, index) => {
            return (
                <img className="m-2" src={xx.hinhAnh} style={{ width: "50px" }} alt="hinh" key={index} />
            );
        })
    }
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-md-4">
                    <button className="btn btn-success p-5"><span className="display-4">Tài</span></button>
                </div>
                <div className="col-md-4">
                    {renderXucXac()}
                </div>
                <div className="col-md-4">
                    <button className="btn btn-danger p-5"><span className="display-4">Xỉu</span></button>
                </div>
            </div>
        </div>
    )
}


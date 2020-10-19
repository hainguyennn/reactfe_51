import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachXucXac extends Component {
    renderXucXac = () => {
        return this.props.mangXucXac.map((xucXac, index) => {
            return (
                <img
                    key={index}
                    className="m-3"
                    style={{ width: "50px" }}
                    src={xucXac.hinhAnh}
                />
            );
        });
    };
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-3">
                        <button
                            onClick={() => {
                                this.props.datCuoc("Tài");
                            }}
                            className="btn btn-warning p-5 display-4"
                        >
                            Tài
                        </button>
                    </div>
                    <div className="col-6 text-center">{this.renderXucXac()}</div>
                    <div className="col-3">
                        <button
                            onClick={() => {
                                this.props.datCuoc("Xỉu");
                            }}
                            className="btn btn-danger p-5 display-4"
                        >
                            Xỉu
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            const action = {
                type: "DAT_CUOC",
                taiXiu,
            };
            dispatch(action);
        },
    };
};

// Lấy state từ redux về viến thành props của component
const mapStateToProps = (state) => {
    return {
        mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachXucXac);

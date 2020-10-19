import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
    renderKetQua = () => {
        let tongDiem = this.props.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
            return (tongDiemXX += xucXac.so);
        }, 0);
        let ketQua = tongDiem > 9 ? "Tài" : "Xỉu";
        return (
            <div>
                <span className="display-4 text-light">
                    {tongDiem} - {ketQua}
                </span>
            </div>
        );
    };
    render() {
        let { banChon, soBanThang, tongSoBanChoi } = this.props;
        return (
            <div className="text-center mt-5">
                <div className="display-4">{this.renderKetQua()}</div>
                <div className="display-4">
                    Bạn chọn: <span className="text-danger">{banChon}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng: <span className="text-success">{soBanThang}</span>
                </div>
                <div className="display-4">
                    Tổng số bàn chơi:{" "}
                    <span className="text-primary">{tongSoBanChoi}</span>
                </div>
                <div className="display-4">
                    <button
                        onClick={() => {
                            {
                                this.props.playGame();
                            }
                        }}
                        style={{ fontSize: "20px" }}
                        className="btn btn-success"
                    >
                        PLAY GAME
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let n = 0;
            // setInterval là hàm thực thi liên tục theo thời gian quy định => thực thi cho đến khi ta gọi clearInterval
            let randomXucXac = setInterval(() => {
                const action = {
                    type: "RANDOM_XUC_XAC",
                };
                dispatch(action);
                n++;
                if (n === 10) {
                    // Dừng hàm
                    clearInterval(randomXucXac);
                    const actionXLKQ = {
                        type: "END_GAME",
                    };
                    dispatch(actionXLKQ);
                }
            }, 50);
        },
    };
};

const mapStateToProps = (state) => {
    return {
        banChon: state.stateBaiTapGameXucXac.banChon,
        soBanThang: state.stateBaiTapGameXucXac.soBanThang,
        tongSoBanChoi: state.stateBaiTapGameXucXac.tongSoBanChoi,
        mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);

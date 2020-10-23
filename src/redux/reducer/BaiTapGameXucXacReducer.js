const stateDefault = {
    banChon: "Tài",
    mangXucXac: [
        { so: 6, hinhAnh: "./img/BaiTapGameXucXac/2.png" },
        { so: 6, hinhAnh: "./img/BaiTapGameXucXac/4.png" },
        { so: 6, hinhAnh: "./img/BaiTapGameXucXac/3.png" }
    ],
    soBanThang: 0,
    tongSoBanChoi: 0,
};

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "DAT_CUOC": {
            state.banChon = action.taiXiu;
            return { ...state };
        }
        case "RANDOM_XUC_XAC": {
            // Xử lý tạo ra 3 con xúc xắc ngẫu nhiên gán lại cho mangXucXac
            let mangXucXacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                //   mỗi lần lặp tạo ra một số ngẫu nhiên
                const soNgauNhien = Math.floor(Math.random() * 6) + 1;
                // từ số ngẫu nhiên tạo ra xúc xắc ngẫu nhiên
                const xucXacNgauNhien = {
                    so: soNgauNhien,
                    hinhAnh: `./img/BaiTapGameXucXac/${soNgauNhien}.png`,
                };
                // push vào mangXucXacNgauNhien
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            state.mangXucXac = mangXucXacNgauNhien;
            return { ...state };
        }
        case "END_GAME": {
            let tongDiem = state.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
                return (tongDiemXX += xucXac.so);
            }, 0);
            // Cách 2:
            //   let tongDiem = 0;
            //   for (let i = 0; i < state.mangXucXac.length; i++) {
            //     tongDiem += state.mangXucXac[i].so;
            //   }
            if (
                (tongDiem > 9 && state.banChon === "Tài") ||
                (tongDiem <= 9 && state.banChon === "Xỉu")
            ) {
                state.soBanThang += 1;
            }
            state.tongSoBanChoi += 1;
            return { ...state };
        }
    }
    return { ...state };
};

export default BaiTapGameXucXacReducer;

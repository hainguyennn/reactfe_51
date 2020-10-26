import React, { useState } from 'react'
// const arr = []; các giá trị không phải state, không cần render lại khi setState => để ở ngoài component
export default function BaiTapDoiMauXe(props) {

    const [state, setState] = useState({ hinhAnh: './img/car/products/red-car.jpg' })

    const changeColor = (color) => {
        const duongDanMoi = `./img/car/products/${color}-car.jpg`
        setState({ hinhAnh: duongDanMoi })
    }
    return (
        <div className="container">
            <h3 className="text-center">Bài tập đổi màu xe react hook</h3>
            <div className="row mt-3">
                <div className="col-md-7">
                    <p>Please choose your favorite about car's color</p>
                    <img src={state.hinhAnh} alt="hinh" style={{ width: '100%' }} />
                </div>
                <div className="col-md-5 text-center">
                    <h3>Change color</h3>
                    <button onClick={() => {
                        changeColor('red');
                    }} className="btn btn-danger m-2">Red color</button>
                    <button onClick={() => {
                        changeColor('silver');
                    }} className="btn text-white m-2" style={{ backgroundColor: 'grey' }}>Silver</button>
                    <button onClick={() => {
                        changeColor('black');
                    }} className="btn btn-dark m-2">Black color</button>
                    <button onClick={() => {
                        changeColor('steel');
                    }} className="btn btn-dark m-2">Steel color</button>
                </div>
            </div>
        </div>
    )
}

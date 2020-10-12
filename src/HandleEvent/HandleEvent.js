import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showTitle = () => {
        alert('Hello Nguyên')
    }

    showMess = (mess) => {
        alert(`hello ${mess}`);
    }
    render() {
        return (
            <div>
                {/* <button className="btn btn-success" onClick={function(){
                    alert('Hello Nguyên')
                }}>Hello</button> ít xài */}
                 {/* <button className="btn btn-success" onClick={() =>{
                    alert('Hello Nguyên')
                }}>Hello</button> */}

                {/* Xử lý sự kiện truyền callback */}
                <button className="btn btn-success" onClick={this.showTitle}>Hello</button>

                {/* Xử lý sự kiện sử dụng hàm trung gian, sử dụng chính */}
                <button className="btn btn-success" onClick={() => {
                    this.showTitle();
                }}>Show title</button>
                <br></br>
                {/* .showMess gọi hàm liền luôn, .bind không gọi hàm, vừa vào website gọi hàm nhưng giá trị khác */}
                {/* ES5 */}
                <button className="btn btn-danger" onClick={this.showMess.bind(this,'Nguyên')}>Show message ES5</button>


                {/* ES6, sử dụng chính */}
                <button className="btn btn-dark" onClick={() => {
                    this.showMess('Nguyên')
                }}>Show mess ES6</button>
            </div>
        )
    }
}

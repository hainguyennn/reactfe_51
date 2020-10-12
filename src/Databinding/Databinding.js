import React, { Component } from 'react'

export default class Databinding extends Component {

    // Thuộc tính của lớp đối tượng => Sử dụng được ở nhiều phương thức trong lớp đối tượng
    hocVien = {
        ma: 1,
        avatar: 'https://picsum.photos/200/200',
        tenHocVien: 'Trịnh Hải Nguyên'
    }

    // Phương thức => phương thức có thể gọi trong các phương thức khác của lớp đối tượng

    renderHocVIen = () => {
        return <div className="card border-dark">
            <img className="card-img-top" src={this.hocVien.avatar} alt />
            <div className="card-body">
                <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
                <p className="card-text">Mã số: {this.hocVien.ma}</p>
            </div>
        </div>
    }

    render() {
        // ------------- Binding data là biến ------------------
        let title = 'CYBERSOFT';
        let imgSrc = 'https:/picsum.photos/200/200';

        // -------------Binding data là hàm --------------------
        const renderImg = () => {
            // Giá trị hàm muốn render ra giao diện phải trả về chuỗi, số, hoặc jsx
            return <div className="card text-white bg-primary w-50">
                <img className="card-img-top" src={imgSrc} alt />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                </div>
            </div>
        }
        return (
            <div className="container">
                <div id="title">
                    {title}
                </div>
                <div className="w-25">
                    <img src={imgSrc}></img>
                </div>
                <input className="w-50 form-control" value={title}></input>
                <div>
                    {renderImg()}
                </div>
                <ul>
                    <li>Mã học viên: {this.hocVien.ma}</li>
                    <li>Tên học viên: {this.hocVien.tenHocVien}</li>
                    <li>Avatar: <img src={this.hocVien.avatar} width="200" height="200"></img></li>
                </ul>
                {this.renderHocVIen()}
            </div>
        )
    }
}

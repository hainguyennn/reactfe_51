import React, { Component } from 'react'
import DanhSachXucXac from './DanhSachXucXac'
import KetQuaTroChoi from './KetQuaTroChoi'
import style from './BaiTapGameXucXac.module.css'

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className={`${style.fontGameXucXac}`} style={{backgroundImage: 'url(./img/BaiTapGameXucXac/bgGame.png)',width:'100%',height:'100%',position:'fixed',top:0,left:0}}>
                <h1 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h1>
                <DanhSachXucXac/>
                <KetQuaTroChoi/>
            </div>
        )
    }
}

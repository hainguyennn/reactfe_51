import React, { Component } from "react";

export default class CardItem extends Component {

  render() {
    const styleBtnRight ={
      marginRight : '10px'
    }
    const styleBtnLeft ={
      marginLeft : '10px'
    }
    let {card,tangGiamSoLuong,deleteItem} = this.props;
    return (
      <tr className="card-item">
        <td>{card.maSP}</td>
        <td>{card.tenSP}</td>
        <td>
          <img src={card.hinhAnh} width={50} alt="hinh" />
        </td>
        <td>
          <button className="btn btn-success" style={styleBtnRight} onClick={() => {this.props.tangGiamSoLuong(card.maSP,false)}}>-</button>
          {this.props.card.soLuong}
          <button className="btn btn-success" style={styleBtnLeft} onClick={() => {tangGiamSoLuong(card.maSP,true)}}>+</button>
        </td>
        <td>{card.giaBan.toLocaleString()}</td>
        <td>{(card.giaBan * card.soLuong).toLocaleString()}</td>
        <td>
          <button onClick={() => {
            deleteItem(card.maSP)
          }} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

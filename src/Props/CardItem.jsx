import React, { Component } from 'react'

export default class CardItem extends Component {
  render() {
    // this.props( Đây là thuộc tính có sẵn của react class Component.Dùng để nhận dữ liệu từ Component cha truyền vào)
    /**
     * chú ý : props không thể gán lại dữ liệu
     */

    const {hoTen,hinhAnh,tuoi}= this.props
    
    return (
      <div className='card'>
        <img src={hinhAnh} alt="..." />
        <div className='card-body'>
            <h3>Name:{hoTen} </h3>
            <p>{tuoi}</p>
        </div>
      </div>
    )
  }
}

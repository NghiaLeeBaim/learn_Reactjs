import React, { Component } from "react";
import { connect } from "react-redux";

// B1: xây dựng giao diện
// B2: xác định dữ liệu thay đổi (state)=> object, array, number, string,...
// B3 binding state lên giao diện ( kết nối với redux về và hiển thị lên giao diện)
// B4: Thay đổi state (xử lý thông qua các sự kiện onClick, onChange, onBlur, ...)=>đưa dữ liệu lên redux xử lý

class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h3>Ví dụ 1: like ảnh</h3>
        <div className="w-25 mt-2 card">
          <img src={this.props.img} alt="photo" />
        </div>
        <div className="card-body">

        <button className="btn btn-danger m-5" onClick={()=>{
          const action={
            type:'changeIMG',
            payload:'./img/red-car.jpg'
          };
          this.props.dispatch(action);
        }}>Change</button>

          <i
            className="fa fa-heart display-4 text-danger fs-3"
            style={{ cursor: "pointer" }} onClick={()=>{
              // gửi dữ liệu lên redux
              const action = {
                // Nhãn của action
                type:"increaseLike",
                // dữ liệu gửi lên redux
                payload: 1
              }
              // Dùng this.props.dispatch để đưa dữ liệu lên reducer
              this.props.dispatch(action);
            }}
          />
          {this.props.like}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>( {
    like: state.likeReducer,
    img: state.imgReducer,

});




// Dùng thư viện connect để tạo ra nội dung component mới có kết nối dữ liệu với redux

const ComponentWithRedux = connect(mapStateToProps)(DemoRedux);

export default ComponentWithRedux;

// closure funtion
// function main(){
//     return function(thamSo)
//     {
//         console.log(thamSo);
//     }
// }

// main(123)

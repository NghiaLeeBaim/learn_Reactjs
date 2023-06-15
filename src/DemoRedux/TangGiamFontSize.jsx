// rccRedux
/**
 * Khi sử dụng snippet rccRedux cần lưu ý
 * + Khóa chữ export  tại class component
 * + Xóa hàm dispatchToProps ở connect và ở trên chữ connect
 */

import React, { Component } from "react";
import { connect } from "react-redux";

class TangGiamFontSize extends Component {
  render() {
    const { fontSize,dispatch } = this.props;
    return (
      <div className="container">
        <h3>Ví dụ 2: tăng giảm font size</h3>
        <p style={{ fontSize: fontSize }}>úm ba la a la ba tráp</p>
        <button
          className="btn btn-dark mx-2"
          onClick={() => {
            const action = {
              type: "changeFontSize",
              payload: 2,
            };
            dispatch(action);
          }}
        >
          +
        </button>
        <button
          className="btn btn-dark mx-2"
          onClick={() => {
            const action = {
              type: "changeFontSize",
              payload: -2,
            };
            dispatch(action);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fontSize: state.fontSizeReducer,
});

export default connect(mapStateToProps)(TangGiamFontSize);

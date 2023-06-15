import React, { Component } from "react";
import { connect } from "react-redux";

class FormRegister extends Component {
  handleChange = (e) => {
    const { value, id } = e.target;
    // Tạo action đưa value và id lên redux
    const action = {
      type: "HANDLE_CHANGE_FORM",
      payload: {
        id: id,
        value: value,
      },
    };
    // DÙng dispatch gửi lên reducer
    this.props.dispatch(action);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const values = this.props.userRegister;
    // Tạo ra dữ liệu action đưa lên reducer
    const action = {
      type: 'REGISTER_FORM',
      payload: values
    };
    // DÙng dispatch gửi lên reducer
    this.props.dispatch(action);
  };
  render() {
    const { userRegister } = this.props;
    // console.log(userRegister);
    return (
      <form className="frm" onSubmit={this.handleSubmit}>
        <h3>Register</h3>
        <div className="form-group">
          <p>email</p>
          <input
            className="form-control"
            id="email"
            value={userRegister.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <p>name</p>
          <input
            className="form-control"
            id="name"
            value={userRegister.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <p>Password</p>
          <input
            className="form-control"
            id="password"
            value={userRegister.password}
            onChange={this.handleChange}
            type="password"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-dark mt-2" type="submit">
            Register
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  userRegister: state.userRegisterReducer,
});

export default connect(mapStateToProps)(FormRegister);

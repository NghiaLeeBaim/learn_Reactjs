import React, { Component } from "react";
import { connect } from "react-redux";
import FormRegister from "./FormRegister";

class DemoRegister extends Component {
  render() {
    return (
      <div className="container">
        <FormRegister />

        <table className="table mt-2">
          <thead className="bg-dark text-white">
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Password</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.props.arrUser.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.email}</td>
                  <td>{item.name}</td>
                  <td>{item.password}</td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>{
                      const action= {
                        type:'DEL_USER',
                        payload:item.email
                      }
                      this.props.dispatch(action)
                    }}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrUser: state.arrUserReducer,
});

export default connect(mapStateToProps)(DemoRegister);

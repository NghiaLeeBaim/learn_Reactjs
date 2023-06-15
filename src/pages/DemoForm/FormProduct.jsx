import React, { Component } from "react";

export default class FormProduct extends Component {
  render() {
    return (
      <form className="card">
        <div className="card-header bg-dark text-white">
          <h3>Product info</h3>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <p>id</p>
                        <input className="form-control" id="id" name="id" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <p>Name</p>
                        <input className="form-control" id="name" name="name" />
                    </div>
                </div>

            </div>
        </div>

        <div className="card-footer text-center2">
            <button className="btn btn-success mx-2" type="submit">Create</button>
            <button className="btn btn-primary mx-2" type="button">Update</button>
        </div>
      </form>
    );
  }
}

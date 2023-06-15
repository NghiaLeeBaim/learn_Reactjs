import React, { Component } from "react";
import FormProduct from "./FormProduct";

export default class ProductManegerment extends Component {
  render() {
    return (
      <div className="container">
        <h3>Product mangerment</h3>
        <FormProduct />
        <table className="table">
          <thead className="bg-dark text-white">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>image</th>
              <th>price</th>
              <th>description</th>
              <th>type</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Prodcut 1</td>
              <td>
                <img src="./img/red-car.jpg" alt="..." width={50} />
              </td>
              <td>1000</td>
              <td>Product Desciption</td>
              <td>phone</td>
              <td>
                <button className="btn btn-danger">
                  <i className="fa fa-trash"></i>
                </button>
                <button className="btn btn-primary mx-2">
                  <i className="fa fa-edit"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

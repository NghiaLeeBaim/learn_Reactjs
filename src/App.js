import logo from "./logo.svg";
import "./App.css";
import DemoProps from "./Props/DemoProps";
import ListProduct from "./Props/ShoesShop/ListProduct";
import { dataProduct } from "./data/dataProduct";
import { Component } from "react";
import PhoneDetail from "./Props/PhoneDetail/PhoneDetail";

// cấu hình router
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Header from "./Components/Header/Header";
import HomeTeamplate from "./template/HomeTeamplate";
import ProductManegerment from "./pages/DemoForm/ProductManegerment";
import LifeCycleDemo from "./pages/LifeCycleDemo/LifeCycleDemo";
import DemoRedux from "./DemoRedux/DemoRedux";
import TangGiamFontSize from "./DemoRedux/TangGiamFontSize";
import DemoRegister from "./DemoRedux/DemoRegister/DemoRegister";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTeamplate />}>
            <Route index element={<Home></Home>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="form" element={<ProductManegerment></ProductManegerment>}></Route>
            <Route path="lifecycle" element={<LifeCycleDemo></LifeCycleDemo>}></Route>
            <Route path="demo-redux" element={<DemoRedux></DemoRedux>}></Route> 
            <Route path="demo-redux-1" element={<TangGiamFontSize></TangGiamFontSize>}></Route>
            <Route path="demo-redux-2" element={<DemoRegister></DemoRegister>}></Route>          
          </Route>
          <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

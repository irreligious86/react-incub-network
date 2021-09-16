import React from "react";
import './App.css';

import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
  <BrowserRouter>
      <div className="app-wrapper">
          <Header/>
          <Sidebar/>
          <Content/>
          <Footer/>
      </div>
  </BrowserRouter>
  );
}

export default App;

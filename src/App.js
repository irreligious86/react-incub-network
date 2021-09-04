import React from "react";
import './App.css';

import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;

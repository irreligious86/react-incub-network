import React from "react";
import './App.css';
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";

const App = props => {
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

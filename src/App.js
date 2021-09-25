import React from "react";
import './App.css';

import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";
import {BrowserRouter, Route} from "react-router-dom";


const App = props => {
  return (
      <div className="app-wrapper">
          <Header/>
          <Sidebar/>
          <Content
              state={props.state}
              addPost={props.addPost}
          // postData={props.appState.postData}
          // dialogsData={props.appState.dialogsData}
          // messagesData={props.appState.messagesData}
          />
          <Footer/>
      </div>
  );
}

export default App;

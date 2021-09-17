import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./Redux/state";

ReactDOM.render(
  <React.StrictMode>
    <App
        appState={state}
    // postData={state.postData}
    // dialogsData={state.dialogsData}
    // messagesData={state.messagesData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);


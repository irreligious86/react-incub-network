import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import state from "./Redux/state";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App
                state={state}
                // postData={state.postData}
                // dialogsData={state.dialogsData}
                // messagesData={state.messagesData}
            />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


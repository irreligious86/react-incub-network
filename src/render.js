import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {addPost} from "./Redux/state";



export let rerenderEntireTree = state => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    // postData={state.postData}
                    // dialogsData={state.dialogsData}
                    // messagesData={state.messagesData}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}





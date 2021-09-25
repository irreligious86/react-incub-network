import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import state, {addPost} from "./Redux/state";
import {rerenderEntireTree} from "./render";



rerenderEntireTree(state);




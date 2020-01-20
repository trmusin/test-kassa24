import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import Provider from "react-redux/es/components/Provider";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";


ReactDOM.render(
    <Provider store={store()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,document.getElementById('root'));
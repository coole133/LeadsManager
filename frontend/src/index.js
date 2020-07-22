import App from './components/App'
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import React from "react";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'))
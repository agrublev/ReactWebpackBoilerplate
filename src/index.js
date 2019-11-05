import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// TEST CHANGE  

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept(); // already had this init code

    module.hot.addStatusHandler(status => {
        if (status === "prepare") console.clear();
    });
}

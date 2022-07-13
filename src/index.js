import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import globContent from './content'



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <globContent.Provider value={1000}>
        <App />
    </globContent.Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

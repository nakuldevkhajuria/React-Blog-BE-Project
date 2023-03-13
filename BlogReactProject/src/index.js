import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
export const BollywoodContext = createContext();

const data = {
  img:'https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg',
  img1:'https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000'
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <BollywoodContext.Provider value={data}>
    <App />
    </BollywoodContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

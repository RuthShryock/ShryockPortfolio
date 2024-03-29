import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import About from "./pages/About/About";
import Art from "./pages/Art/Art";
import React from 'react';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/art" element={<Art/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
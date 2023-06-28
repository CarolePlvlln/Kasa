import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './assets/styles/index.scss';
import './assets/styles/App.css';
//import App from './components/'
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Logements from './pages/Logements';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Logements" element={<Logements />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/*" element={<Error />} />
            </Routes>
      <Footer />
    </Router>
       
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

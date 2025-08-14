import React from 'react';
import { createRoot} from 'react-dom/client'
import './styles/index.css'
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter } from "react-router-dom";
import Router from './components/Router.jsx';
import Header from './components/Header.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Router />
  </BrowserRouter>,
)

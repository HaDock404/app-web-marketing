import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import './styles/normalize.css'
import GlobalStyle from './styles/createGlobalStyle.jsx'
import ScrollToTop from "./styles/ScrollToTop";

import HomePage from './pages/HomePage/HomePage';
import OffersPage from './pages/Offers/OffersPage'
import WebEssentialPage from './pages/WebEssential/WebEssentialPage.jsx';
import RegistrationPage from './pages/Registration/RegistrationPage.jsx'
import ConnexionPage from './pages/Connexion/ConnexionPage.jsx'
import AboutPage from './pages/About/AboutPage.jsx'
import LegalsPage from './pages/Legals/LegalsPage.jsx'
import CodePage from './pages/Code/CodePage.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <GlobalStyle/>
    <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/nos-offres" element={<OffersPage />}/>
          <Route path="/web-essential" element={<WebEssentialPage />}/>
          <Route path="/registration" element={<RegistrationPage />}/>
          <Route path="/connexion" element={<ConnexionPage />}/>
          <Route path="/a-propos" element={<AboutPage />}/>
          <Route path="/mentions-legales" element={<LegalsPage />}/>
          <Route path="/code-validation" element={<CodePage />}/>
        </Routes>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

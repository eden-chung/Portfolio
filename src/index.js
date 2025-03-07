import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from './theme';


const customTheme = extendTheme(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={customTheme}>
    <React.StrictMode>
      <HashRouter basename="/">
        <Routes>
          <Route exact path="/" element={<App />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </ChakraProvider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

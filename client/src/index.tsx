import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css';
import App from './App';
import About from './pages/About/About';
import Books from "./pages/Books/Books";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/" element={<About />} />
        <Route path="/books" element={<Books />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

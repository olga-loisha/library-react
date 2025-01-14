import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css';
import App from './App';
import AboutPage from './pages/AboutPage/AboutPage';
import BooksPage from "./pages/BooksPage/BooksPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/" element={<AboutPage />} />
        <Route path="/books/:pageNumber" element={<BooksPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

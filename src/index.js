import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import EventExamples from './EventExamples';
import Blog from './Blog';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/event-examples" element={<EventExamples />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePosts from './pages/HomePosts';
import CreatePost from './pages/CreatePost';
import DetailPost from './pages/DetailPost';
import { ContextProvider } from './config/store';
import Header from './components/Header';
import Loader from './components/Loader';


ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/create-update" element={<CreatePost />} />
          <Route exact path="/details" element={<DetailPost />} />
          <Route exact path="/" element={<HomePosts />} />
        </Routes>
      </BrowserRouter>
      <Loader />
    </ContextProvider>
  </React.StrictMode>
);

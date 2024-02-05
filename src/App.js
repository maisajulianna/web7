import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import './App.css'

function App() {
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
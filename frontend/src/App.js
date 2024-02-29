import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Start from './components/Start';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Settings from './components/settings/Settings';

import SettingsNav from './components/settings/components/SettingsNav';
import Account from './components/settings/components/Account';
import Notifications from './components/settings/components/Notifications';
import Blocked from './components/settings/components/Blocked';
import Privacy from './components/settings/components/Privacy';
import Terms from './components/settings/components/Terms';
import Help from './components/settings/components/Help';
import './App.css'
//const connectDB = require("./config/db");
//const app = express();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("user")) || true
  );
return (
  <BrowserRouter>
    <Navbar
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
    />
    <Routes>
    <Route path="/" element={<Navigation />}>
        <Route index element={<Start />} />
        <Route path="login" element={!isAuthenticated ? (<Login setIsAuthenticated={setIsAuthenticated}/>) : <Navigate to ="login"/>} />
        <Route path="register" element={!isAuthenticated ? (<Registration setIsAuthenticated={setIsAuthenticated}/>) : <Navigate to ="register"/>} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />       
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/settings/" element={<SettingsNav />}>
        <Route index element={<Settings />} />
        <Route path="account" element={<Account />} />
        <Route path="notifs" element={<Notifications />} />
        <Route path="blocked" element={<Blocked />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};


/*
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Registration />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />       
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/" element={<SettingsNav />}>
        <Route path="account" element={<Account />} />
        <Route path="notifs" element={<Notifications />} />
        <Route path="blocked" element={<Blocked />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
*/

export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Start from './pages/Start';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Settings from './components/settings/Settings';

// components
import Navbar from './components/Navbar';
import Navigation from './components/Navigation';

// settings
import SettingsNav from './components/settings/components/SettingsNav';
import Account from './components/settings/components/Account';
import Notifications from './components/settings/components/Notifications';
import Blocked from './components/settings/components/Blocked';
import Privacy from './components/settings/components/Privacy';
import Terms from './components/settings/components/Terms';
import Help from './components/settings/components/Help';
import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Start />} />
              <Route path="login" element={<Login /> } />
              <Route path="signup" element={<Signup />} />
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
        </div>
      </BrowserRouter>
    </div>
  );
};


/*
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("user")) || true
  );
  <Navbar
  isAuthenticated={isAuthenticated}
  setIsAuthenticated={setIsAuthenticated}
/>
*/

/*
  <Route path="/login" element={!isAuthenticated ? (<Login setIsAuthenticated={setIsAuthenticated}/>) : <Navigate to ="/login"/>} />
  <Route path="register" element={!isAuthenticated ? (<Registration setIsAuthenticated={setIsAuthenticated}/>) : <Navigate to ="/"/>} />

*/
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
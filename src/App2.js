import Account from './Account';
import Notifications from './Notifications';
import Blocked from './Blocked';
import Privacy from './Privacy';
import Terms from './Terms';
import Help from './Help';
import NotFound from './NotFound';
import SettingsNav from './SettingsNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App2() {
    return (
      <BrowserRouter>
        <Routes>
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
      </BrowserRouter>
      );
    };

export default App2;
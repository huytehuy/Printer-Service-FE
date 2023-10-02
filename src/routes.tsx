import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Printer from './pages/Printer';
// import { isMobile } from 'react-device-detect';

export const routes = (
  <Routes>
    <Route path='/*' element={<Printer />} />
    <Route path='/login' element={<Login />} />
    {/* <Route path='/mobile/monitor' element={<MobileMonitor />} />
    <Route path='/sharelocation' element={<ShareLocation />} />
    <Route path='/*' element={isMobile ? <MobileMonitor /> : <Monitor />} /> */}
  </Routes>
);
1;

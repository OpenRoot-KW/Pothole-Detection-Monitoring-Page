import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardInfo from './pages/dashboardInfo/DashboardInfo';
import PotholeInfo from './pages/potholeInfo/PotholeInfo';
import Report from './pages/reportPothole/Report';
import PotholeProcessList from './pages/Potholeprocessing/PotholeProcessList';
import PotholeRepairList from './pages/Potholeprocessing/PotholeRepairList';
import { Statistics } from './pages/statistics/Statistics';
import { LoginPage } from './pages/login/LoginPage';
import { Layout } from './layout/Layout';
import { MENU_ITEMS } from './config/menus';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route
              path={MENU_ITEMS.DASHBOARD.href}
              element={<DashboardInfo />}
            />
            <Route path={MENU_ITEMS.STATISTICS.href} element={<Statistics />} />
            <Route
              path={MENU_ITEMS.POTHOLE_INFO.href}
              element={<PotholeInfo />}
            />
            <Route path={MENU_ITEMS.REPORT_POTHOLE.href} element={<Report />} />
            <Route
              path={MENU_ITEMS.MANAGEMENT.href}
              element={<PotholeProcessList />}
            />
            <Route
              path={MENU_ITEMS.REPAIR.href}
              element={<PotholeRepairList />}
            />
          </Route>
        </Routes>
      </main>
      <ToastContainer position="bottom-center" autoClose={3000} />
    </div>
  );
}

export default App;

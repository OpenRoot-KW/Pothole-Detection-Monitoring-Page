import { TopBar } from '../components/topBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

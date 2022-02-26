import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import Toggle from './Toggle';

function Layout() {
  return (
    <div className='layout'>
      <AppHeader />
      <Outlet />
      <Toggle />
    </div>
  );
}

export default Layout;

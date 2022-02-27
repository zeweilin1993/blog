import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import Social from './Social';

function Layout() {
  return (
    <div className='layout'>
      <Social />
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default Layout;

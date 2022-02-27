import { Social, AppHeader } from './components';
import { Outlet } from 'react-router-dom';

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

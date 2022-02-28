import './styles/index.scss';
import { Social, AppHeader, AppFooter } from './components';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='layout'>
      <Social />
      <AppHeader />
      <div className='layout-main'>
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
}

export default Layout;

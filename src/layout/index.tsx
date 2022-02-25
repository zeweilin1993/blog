import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='layout'>
      <div className='title'>layout</div>
      <Outlet />
    </div>
  );
}

export default Layout;

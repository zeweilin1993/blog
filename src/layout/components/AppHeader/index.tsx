import './styles/index.scss';
import { Link } from 'react-router-dom';
import { navsConfig } from '@/common';

function AppHeader() {
  return (
    <div className='app-header'>
      <nav className='nav'>
        <ul className='navigation'>
          {navsConfig.map((nav, index) => {
            return (
              <li key={index}>
                <Link to={nav.path}>{nav.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default AppHeader;

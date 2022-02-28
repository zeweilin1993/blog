import './styles/index.scss';
import { Link } from 'react-router-dom';
import { navsConfig } from '@/common';

function AppHeader() {
  return (
    <header className='app-header'>
      <nav className='nav bd-before'>
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
    </header>
  );
}

export default AppHeader;

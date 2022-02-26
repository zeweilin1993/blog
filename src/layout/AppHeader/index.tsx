import { Link } from 'react-router-dom';
import { Navs } from './var';
import './index.scss';

function AppHeader() {
  return (
    <div className='app-header'>
      <nav className='nav'>
        <ul className='navigation flex justify-center'>
          {Navs.map((nav, index) => {
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
import './styles/index.scss';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <div className='app-header'>
      <nav className='nav'>
        <ul className='navigation'>
          {['home', 'posts', 'projects', 'about'].map((value, index) => {
            return (
              <li key={index}>
                <Link to={`/${value}`}>{value}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default AppHeader;

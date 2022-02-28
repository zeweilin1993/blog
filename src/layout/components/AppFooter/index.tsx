import './styles/index.scss';
import MiniSocial from './MiniSocial';

function AppFooter() {
  return (
    <footer className='app-footer'>
      <div className='footer'>
        {/* <div className='social-wrapper'>
          <MiniSocial />
        </div> */}
        <p className='copyright'>
          Copyright © Lin Zewei 2022
          <span>|</span>
          <a href='https://beian.miit.gov.cn/' rel='noreferrer' target='_blank'>
            粤ICP备20003465号
          </a>
        </p>
      </div>
    </footer>
  );
}

export default AppFooter;

import './styles/index.scss';
import { MiniPiano, MiniSocial } from './components';

function AboutHeader() {
  return (
    <div className='about-header'>
      <div className='header'>
        <MiniPiano />
        <MiniSocial />
      </div>
    </div>
  );
}

export default AboutHeader;

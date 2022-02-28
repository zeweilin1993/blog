import './styles/index.scss';
import { MiniPiano } from './components';

function AboutHeader() {
  return (
    <div className='about-header bd-before'>
      <div className='header'>
        <MiniPiano />
      </div>
    </div>
  );
}

export default AboutHeader;

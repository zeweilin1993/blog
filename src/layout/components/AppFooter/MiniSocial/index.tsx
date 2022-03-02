import './styles/index.scss';
import { itemsConfig } from '@/app-helper';

function MiniSocial() {
  return (
    <div className='mini-social'>
      <ul>
        {itemsConfig.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.path} rel='noreferrer' target='_blank'>
                <img src={item.iconBlack} alt='' />
              </a>
            </li>
          );
        })}
      </ul>
      <span className='bd_n1'></span>
      <span className='bd_n2'></span>
      <span className='bd_n3'></span>
      <span className='bd_n4'></span>
    </div>
  );
}

export default MiniSocial;

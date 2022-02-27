import './styles/index.scss';
import { itemsConfig } from '@/common';

function MiniSocial() {
  return (
    <div className='mini-social'>
      <ul>
        {itemsConfig.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>
                <img src={item.icon} alt='' />
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

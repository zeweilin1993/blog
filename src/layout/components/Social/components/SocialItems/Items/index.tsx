import './styles/index.scss';
import { navsConfig, itemsConfig } from '@/common';

function Items() {
  return (
    <div className='items'>
      {[...navsConfig, ...itemsConfig].map((item, index) => {
        return (
          <div className='item' key={index}>
            <a
              href={item.path}
              rel='noreferrer'
              target={item.meta?.type === 'NAV' ? '_self' : '_blank'}
            >
              <div className='front'>
                <img src={item.icon} alt='' />
              </div>
              <div className='back'>
                <div className='wrap'>
                  <h3>{item.label}</h3>
                  <p className='panel-btn'>View</p>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Items;

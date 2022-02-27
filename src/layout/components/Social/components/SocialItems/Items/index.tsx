import './styles/index.scss';
import { itemsConfig } from './config';

function Items() {
  return (
    <div className='items'>
      {itemsConfig.map((item, index) => {
        return (
          <div className={`item item-${index + 1}`} key={index}>
            <a href={item.href} rel='noreferrer' target='_blank'>
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

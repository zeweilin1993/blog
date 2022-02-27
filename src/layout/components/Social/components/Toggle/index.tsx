import './styles/index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisible, show, hide } from '@/store/socialSlice';

function Toggle() {
  const visible = useSelector(selectVisible);
  const dispatch = useDispatch();

  return (
    <div
      className={visible ? 'toggle toggled' : 'toggle'}
      onClick={() => {
        dispatch((visible ? hide : show)?.());
      }}
    >
      <div className='toggle_body'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
          return <div className={`bars bars_${number}`} key={number}></div>;
        })}
      </div>
    </div>
  );
}

export default Toggle;

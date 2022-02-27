import { useSelector, useDispatch } from 'react-redux';
import { selectVisible, hide } from '@/store/socialSlice';
import Dialog from '@/components/Dialog';
import Items from './Items';

function SocialItems() {
  const visible = useSelector(selectVisible);
  const dispatch = useDispatch();

  return (
    <div className='social-items'>
      <Dialog
        visible={visible}
        DefaultElement={Items}
        closeCallback={() => {
          dispatch(hide());
        }}
      />
    </div>
  );
}

export default SocialItems;

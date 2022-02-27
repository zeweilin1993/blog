import Dialog from '@/components/Dialog';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisible, hide } from '@/store/socialSlice';

function SocialItems() {
  const visible = useSelector(selectVisible);
  const dispatch = useDispatch();

  return (
    <div className='social-items'>
      <Dialog
        visible={visible}
        closeCallback={() => {
          dispatch(hide());
        }}
      />
    </div>
  );
}

export default SocialItems;

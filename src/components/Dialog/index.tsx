import './index.scss';
import { IDialogProps } from './type';

function Dialog(props: IDialogProps) {
  return (
    <div className='dialog'>
      <div className='dialog-default'>{props.default}</div>
      <div className='dialog-mask'></div>
    </div>
  );
}

export default Dialog;

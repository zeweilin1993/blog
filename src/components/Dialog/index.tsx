import './index.scss';
import { IDialogProps } from './types';
import { useState, useEffect } from 'react';

function Dialog({ visible, DefaultElement, closeCallback }: IDialogProps) {
  const [dialogVisible, setDialogVisible] = useState(visible);

  useEffect(() => {
    setDialogVisible(visible);
  }, [visible]);

  return (
    <div className={dialogVisible ? 'dialog is-visible' : 'dialog'}>
      <div className='dialog-default'>{DefaultElement}</div>
      <div
        className='dialog-mask'
        onClick={() => {
          setDialogVisible(false);
          // 关闭对话框回调，外部使用其做交互判断
          closeCallback?.();
        }}
      ></div>
    </div>
  );
}

export default Dialog;

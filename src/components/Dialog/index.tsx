import './styles/index.scss';
import { useState, useEffect } from 'react';

interface IDialogProps {
  visible?: boolean;
  // TODO: 定义 react 组件对象或 jsx 组件
  DefaultElement?: any;
  closeCallback?: () => void;
}

function Dialog({ visible, DefaultElement, closeCallback }: IDialogProps) {
  const [dialogVisible, setDialogVisible] = useState(visible);

  useEffect(() => {
    setDialogVisible(visible);
  }, [visible]);

  return (
    <div className={dialogVisible ? 'dialog is-visible' : 'dialog'}>
      <div className='dialog-default'>
        <DefaultElement />
      </div>
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

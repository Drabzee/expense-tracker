import { useLayoutEffect, useRef } from 'react';
import style from 'styles/Modal.module.scss';

const Modal = ({ children }) => {

  const modalRef = useRef();

  useLayoutEffect(() => {
    if(modalRef.current.scrollHeight > window.innerHeight) {
      modalRef.current.classList.add(style.large);
    }
  }, []);

  return (
    <div ref={modalRef} className={style.modal}>
      <div className={style.content}>
        {children}
      </div>
    </div>
  )
}

export default Modal
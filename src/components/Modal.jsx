import { useLayoutEffect, useRef } from 'react';
import style from 'styles/Modal.module.scss';

const Modal = ({ showModal, children }) => {

  const modalRef = useRef();

  useLayoutEffect(() => {
    if(modalRef.current.scrollHeight > window.innerHeight) {
      modalRef.current.classList.add(style.large);
    }
  }, []);

  const onClickHandler = e => {
    if(e.target === modalRef.current)
      showModal(false);
  }

  return (
    <div ref={modalRef} className={style.modal} onClick={onClickHandler}>
      <div className={style.content}>
        {children}
      </div>
    </div>
  )
}

export default Modal
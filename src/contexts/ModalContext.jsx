import { useState } from 'react';
import { createContext } from 'react';
import Modal from 'components/Modal';

const ModalContext = createContext({});

const ModalContextComponent = ({ children }) => {
    const [ modalContent, setModalContent ] = useState(false);

    const showModal = (content = false) => {
        if(content)
            document.body.style.overflow = "hidden";
        else
            document.body.style.overflow = "auto";

        setModalContent(content);
    }

    return (
        <ModalContext.Provider value={showModal}>
            { modalContent && <Modal>{modalContent}</Modal> }
            { children }
        </ModalContext.Provider>
    );
}

export default ModalContextComponent;
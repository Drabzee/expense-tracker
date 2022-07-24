import { useState, useContext } from 'react';
import { createContext } from 'react';
import Modal from 'components/Modal';

const ModalContext = createContext({});

export const useModal = () => useContext(ModalContext);

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
            { modalContent && <Modal showModal={showModal}>{modalContent}</Modal> }
            { children }
        </ModalContext.Provider>
    );
}

export default ModalContextComponent;
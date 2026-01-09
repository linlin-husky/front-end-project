import { useRef } from 'react';
import './Modal.css';
import Button from './Button';
function Modal({ children, className }) {

    const dialogRef = useRef();



    return (
        <>
            <Button className={className} onClick={() => {
                dialogRef.current.showModal();
            }}>Log in</Button>


            <dialog className={className} ref={dialogRef}>
                {children}
                <Button className="dialog__form--closeButton" onClick={() => {
                    dialogRef.current.close();
                }}>Closed</Button>
            </dialog>
        </>
    );
}

export default Modal;
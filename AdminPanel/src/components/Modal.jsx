import { createPortal } from 'react-dom';

const Modal = ({ isOpen = false, setIsOpen, children }) => {
    return (
        isOpen &&
        createPortal(
            <section
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-screen h-screen bg-black/30 backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center p-5 z-[9999999999999999]"
            >
                <div onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </section>,
            document.getElementById('portal')
        )
    );
};

export default Modal;

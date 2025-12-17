import { cn } from '../Util/Util';
import { RxCross2 } from 'react-icons/rx';
import { createPortal } from 'react-dom';

const Modal = ({ children, className, closeModal }) => {
    return createPortal(
        <section className="w-screen h-screen fixed left-0 right-0 bottom-0 top-0 bg-black/30 backdrop-blur-sm z-[9999999999999999] flex items-center justify-center">
            <div
                className={cn(
                    'shadow-2xl dark:bg-gray-900 bg-white p-5 overflow-y-auto rounded-lg w-[300px]',
                    className
                )}
            >
                <div className="w-full flex justify-end items-center">
                    <RxCross2
                        size={25}
                        onClick={closeModal}
                        className="cursor-pointer hover:text-green ease-in-out duration-300 hover:rotate-90"
                    />
                </div>
                {children}
            </div>
        </section>,
        document.getElementById('portal')
    );
};

export default Modal;

import { useContext } from 'react';
import { TbMenu } from 'react-icons/tb';
import { RxCross2 } from 'react-icons/rx';
import { SideberContext } from '../context/sideber-context/SideberContext';

const Navbar = () => {
    const { isOpen, setIsOpen } = useContext(SideberContext);

    return (
        <section className="bg-black/15 backdrop-blur-[50px] border-b border-white/20 shadow-md fixed w-screen h-[65px] top-0 left-0 z-9999999 flex items-center justify-between sm:px-10 px-5">
            <div className="uppercase font-medium text-xl text-gray-200">
                <h2>rafi</h2>
            </div>
            <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center justify-center gap-1 border border-white/20 px-4 py-1 rounded-full cursor-pointer select-none text-gray-200"
            >
                <h2>Menu</h2>
                {!isOpen ? <TbMenu /> : <RxCross2 />}
            </div>
        </section>
    );
};

export default Navbar;

import { MdOutlineLightMode } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';
import { useDarkMode } from '../hooks/useDarkMode';
import { RiMoonLine } from 'react-icons/ri';

const Menu = ({ menuOnClick, isMenuOpen }) => {
    const [dark, setDark] = useDarkMode();

    return (
        <div className="lg:w-full gap-5 flex lg:items-center lg:justify-between lg:mb-5 dark:text-gray-200 text-gray-700">
            <div>
                <RxHamburgerMenu
                    size={25}
                    onClick={() => menuOnClick((prev) => !prev)}
                    className="cursor-pointer hover:text-green transition-all ease-in-out duration-300"
                    style={{ display: isMenuOpen ? 'none' : 'flex' }}
                />
                <RxCross2
                    size={25}
                    onClick={() => menuOnClick((prev) => !prev)}
                    className="cursor-pointer hover:text-green hover:rotate-90 transition-all ease-in-out duration-300"
                    style={{ display: isMenuOpen ? 'flex' : 'none' }}
                />
            </div>
            <div onClick={() => setDark((prev) => !prev)}>
                {!dark ? (
                    <RiMoonLine
                        size={25}
                        className="cursor-pointer hover:text-green transition-all ease-in-out duration-300"
                    />
                ) : (
                    <MdOutlineLightMode
                        size={25}
                        className="cursor-pointer hover:text-green transition-all ease-in-out duration-300"
                    />
                )}
            </div>
        </div>
    );
};

export default Menu;

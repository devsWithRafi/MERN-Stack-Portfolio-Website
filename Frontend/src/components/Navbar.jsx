import { NavLink } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import { FaFileSignature } from 'react-icons/fa';
import { LuCodeXml } from 'react-icons/lu';
import { RiSendPlaneFill } from 'react-icons/ri';

// for desktop
const NavItems = [
    { text: 'about', path: '', icon: <FaUserTie size={15} /> },
    { text: 'works', path: '/works', icon: <MdOutlineWork size={15} /> },
    { text: 'resume', path: '/resume', icon: <FaFileSignature size={15} /> },
    { text: 'skills', path: '/skills', icon: <LuCodeXml size={15} /> },
    { text: 'contact', path: '/contact', icon: <RiSendPlaneFill size={15} /> },
];
// for mobile and tablet
const NavMobileItems = [
    { text: 'about', path: '#', icon: <FaUserTie size={15} /> },
    { text: 'works', path: '#works', icon: <MdOutlineWork size={15} /> },
    { text: 'resume', path: '#resume', icon: <FaFileSignature size={15} /> },
    { text: 'skills', path: '#skills', icon: <LuCodeXml size={15} /> },
    { text: 'contact', path: '#contact', icon: <RiSendPlaneFill size={15} /> },
];

const NavBar = () => {
    return (
        <header className="w-full flex md:flex-row flex-col md:gap-5 gap-0 lg:mb-3 flex-wrap items-start md:items-center">
            {/* Nav for Desktop */}
            {NavItems.map((item, index) => (
                <NavLink
                    to={item.path}
                    key={index}
                    className="text-[14px] hidden lg:flex items-center cursor-pointer justify-center gap-1.5 lg:border dark:border-white/30 border-gray-200 lg:h-[45px] lg:px-10 rounded-full hover:text-green dark:lg:backdrop-blur-[50px] dark:lg:bg-black/10 lg:bg-white/20 ease-in-out duration-300"
                >
                    {item.icon}
                    <p className="font-semibold uppercase">{item.text}</p>
                </NavLink>
            ))}
            {/* Nav for mobile / tablet */}
            {NavMobileItems.map((item, index) => (
                <a
                    href={item.path}
                    key={index}
                    className="text-[14px] flex lg:hidden items-center cursor-pointer md:justify-center gap-1.5  dark:hover:text-green hover:text-green ease-in-out duration-300 md:min-w-0 min-w-full md:py-0 py-3 md:border-0 border-b dark:border-white/10 border-black/30 dark:text-gray-200 text-gray-600"
                >
                    {item.icon}
                    <p className="font-semibold uppercase">{item.text}</p>
                </a>
            ))}
        </header>
    );
};

export default NavBar;

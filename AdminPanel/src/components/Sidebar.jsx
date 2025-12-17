import { Link } from 'react-router';
import { RiHome4Line } from 'react-icons/ri';
import { BsClipboardPlus } from 'react-icons/bs';
import { cn } from '../Utils/cn';
import { useAuth } from '../hooks/useAuth';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { useContext, useState } from 'react';
import { RiLayoutRight2Line } from 'react-icons/ri';
import { SideberExpendContext } from '../context/sideber-expend-context/SideberExpendContext';

const navItems = [
    {
        name: 'home',
        path: '/',
        icon: <RiHome4Line size={18} />,
    },
    {
        name: 'create new project',
        path: '/create-new-project',
        icon: <BsClipboardPlus size={15} />,
    },
];

const Sidebar = ({ className }) => {
    const { user } = useAuth();
    const { logOut } = useAuth();

    const [activeId, setActiveId] = useState(0);

    const { isSidebarExpanded, setIsSidebarExpanded } =
        useContext(SideberExpendContext);

    return (
        <section
            className={cn(
                'bg-black/15 border-white/20 border shadow-md rounded-[0px_20px_20px_0px] p-5 py-6 w-full h-full flex flex-col gap-5 justify-between backdrop-blur-[50px]',
                className
            )}
        >
            {/* top */}
            <div className="flex flex-col">
                <div
                    className={cn(
                        'text-gray-400 flex items-center mb-10',
                        isSidebarExpanded ? 'justify-end' : 'justify-center'
                    )}
                >
                    <RiLayoutRight2Line
                        size={20}
                        onClick={() => setIsSidebarExpanded((prev) => !prev)}
                    />
                </div>
                <div
                    className={cn(
                        'rounded-full overflow-hidden flex items-center justify-center shadow-md  mx-auto mb-3 ease-in-out duration-300',
                        isSidebarExpanded
                            ? 'aspect-square w-[40%]'
                            : 'aspect-square w-full'
                    )}
                >
                    {user?.photoURL ? (
                        <img
                            src={user?.photoURL}
                            alt="Profile"
                            className="w-full rounded-full select-none pointer-events-none"
                        />
                    ) : (
                        <p className="text-5xl">👤</p>
                    )}
                </div>
                <h1
                    className={cn(
                        'font-semibold text-center mb-5 text-2xl text-white',
                        !isSidebarExpanded && 'hidden'
                    )}
                >
                    {user?.displayName}
                </h1>
                <div className="flex flex-col gap-2 border-t border-white/10 py-8">
                    {navItems.map((item, idx) => (
                        <Link
                            key={idx}
                            to={item.path}
                            onClick={() => setActiveId(idx)}
                            className={cn(
                                'text-gray-200 rounded flex items-center font-medium text-[14px] gap-1 relative overflow-hidden',
                                isSidebarExpanded
                                    ? 'h-[45px] w-full items-center px-5'
                                    : 'w-full aspect-square rounded-full items-center justify-center',
                                activeId === idx && 'bg-white/10 text-primary'
                            )}
                        >
                            {item.icon}
                            {isSidebarExpanded ? item.name.toUpperCase() : ''}
                        </Link>
                    ))}
                </div>
            </div>
            {/* bottom */}
            <div className="border-t border-white/10 pt-5">
                <button
                    onClick={logOut}
                    className="py-2 w-full font-medium cursor-pointer text-gray-400 border border-white/0 hover:border-white/20 ease-in-out duration-300 flex items-center justify-center gap-1 rounded-full"
                >
                    <RiLogoutCircleLine />
                    {isSidebarExpanded && <p className="-mt-0.5">Log Out</p>}
                </button>
            </div>
        </section>
    );
};

export default Sidebar;

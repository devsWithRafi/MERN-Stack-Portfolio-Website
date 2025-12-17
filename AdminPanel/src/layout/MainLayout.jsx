import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { SideberExpendContext } from '../context/sideber-expend-context/SideberExpendContext';
import { useContext } from 'react';
import { cn } from '../Utils/cn';

const MainLayout = () => {
    const { isSidebarExpanded } =
        useContext(SideberExpendContext);
    return (
        <section className="flex max-w-[1400px] w-full lg:h-[90vh] lg:min-h-0 min-h-screen z-[1]">
            <div className="flex lg:hidden z-[99999]">
                <Navbar />
            </div>
            <div
                className={cn(
                    'hidden lg:flex ease-in-out duration-300',
                    isSidebarExpanded
                        ? 'min-w-[300px] max-w-[300px]'
                        : 'max-w-[80px]'
                )}
            >
                <Sidebar className={`rounded-[20px]`} />
            </div>
            <section className="mt-[55px] lg:mt-0 lg:py-0 py-10 w-full flex lg:items-center justify-center">
                <Outlet />
            </section>
        </section>
    );
};

export default MainLayout;

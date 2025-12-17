import { useContext, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { MenuContext } from '../context/menu-context/MenuContext';
import { IoSearchOutline } from 'react-icons/io5';
import { ProjectContext } from '../context/project-data-context/ProjectContext';
import { TfiLayoutListThumb } from 'react-icons/tfi';

const Sidebar = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
    const { data } = useContext(ProjectContext);

    const [searchValue, setSearchValue] = useState('');


    return (
        <section
            className={`fixed left-0 top-0 min-h-screen bottom-0 w-[350px] dark:bg-black/70 bg-white/70 backdrop-blur-[100px] z-[111111111] border-r border-white/20 shadow-2xl dark:shadow-black shadow-gray-400 px-10 pt-20 ease-in-out duration-300
      ${!isMenuOpen ? '-translate-x-[110%]' : 'translate-x-[0%]'}`}
        >
            <div className="flex flex-col relative">
                {/* close button */}
                <div
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="cursor-pointer hover:text-green w-full flex items-end 
          justify-end relative bg-green mb-5"
                >
                    <RxCross2
                        size={30}
                        className="absolute duration-300 ease-in-out hover:rotate-90"
                    />
                </div>
                {/* search option */}
                <div className="relative border flex items-center justify-between px-2 py-2.5 overflow-hidden dark:border-white/20 border-gray-400 w-full dark:text-gray-400 dark:focus-within:border-white/50 focus-within:border-gray-600 gap-1">
                    <input
                        onChange={(e) => setSearchValue(e.target.value)}
                        type="text"
                        className="bg-transparent dark:text-green text-gray-500 outline-0 font-font2 font-medium w-full"
                    />
                    <IoSearchOutline
                        size={20}
                        className="dark:text-gray-400 text-gray-500"
                    />
                </div>
                {/* details */}
                <div className="flex items-center gap-2 mt-5 clear-start text-[20px] w-full border-b dark:border-white/15 py-3 border-gray-300 font-medium">
                    <TfiLayoutListThumb className="text-green" />
                    <h2>Recent Projects</h2>
                </div>
                <div className="mt-0">
                    {[...data]
                        .reverse()
                        ?.slice(0, 6)
                        .map(
                            (item, index) =>
                                item.title
                                    .toLowerCase()
                                    .includes(searchValue.toLowerCase()) && (
                                    <a
                                        key={index}
                                        href={`/works/${item.title
                                            .replaceAll(' ', '-')
                                            .toLowerCase()}/${item._id}`}
                                    >
                                        <div
                                            key={item._id}
                                            className="cursor-pointer border-b py-3 dark:border-white/20 border-gray-300 group"
                                        >
                                            <h2 className="text-[18px] font-medium dark:text-gray-200 group-hover:text-green transition">
                                                {item.title.slice(0, 20)}..
                                            </h2>
                                            <p className="dark:text-gray-400 text-gray-500 font-normal text-[13px] dark:group-hover:text-gray-300 group-hover:text-gray-600">
                                                {item.description.slice(0, 70)}
                                                ...
                                            </p>
                                        </div>
                                    </a>
                                )
                        )}
                </div>
            </div>
        </section>
    );
};

export default Sidebar;

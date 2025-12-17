import { GoArrowUpRight } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import { motion as Motion } from 'motion/react';

const ProjectCard = ({ projectData }) => {
    const navigate = useNavigate();
    return (
        <Motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="group cursor-pointer py-2"
        >
            {/* Thumbnail */}
            <div
                onClick={() =>
                    navigate(
                        `/works/${projectData.title
                            .replaceAll(' ', '-')
                            .toLowerCase()}/${projectData._id}`
                    )
                }
            >
                <div className="bg-green w-full aspect-[2/1.5] rounded-[10px] overflow-hidden">
                    <img
                        src={projectData.image}
                        className="w-full h-full group-hover:scale-[1.03] ease-in-out duration-300 group-hover:opacity-[0.7]"
                    />
                </div>
            </div>
            {/* descriptions */}
            <div className="flex items-center justify-between py-5">
                <div className="px-1">
                    <p className="dark:text-gray-400 text-gray-500 dark:bg-white/5 bg-gray-100 dark:border dark:border-white/10 w-[100px] rounded-full py-1 flex items-center justify-center text-[14px] dark:group-hover:bg-green group-hover:bg-green group-hover:text-black ease-in-out duration-300 uppercase">
                        {projectData.category}
                    </p>
                    <h1 className="font-semibold sm:text-[25px] text-[20px] dark:text-white text-black mt-2">
                        {projectData.title.length > 20
                            ? projectData.title.slice(0, 20) + '...'
                            : projectData.title}
                    </h1>
                    <p className="font-font2 dark:text-gray-400 text-gray-500 sm:text-[15px] text-[12px] w-[95%]">
                        {projectData.description.length > 100
                            ? projectData.description.slice(0, 100) + '...'
                            : projectData.description}
                    </p>
                </div>
                <Link
                    to={`/works/${projectData.title
                        .replaceAll(' ', '-')
                        .toLowerCase()}/${projectData._id}`}
                    className="dark:bg-white/95 bg-gray-200 hover:bg-gray-300 dark:hover:bg-white hover:scale-[1.02] dark:text-gray-900 text-gray-600 p-3.5 rounded-full"
                >
                    <GoArrowUpRight size={25} />
                </Link>
            </div>
        </Motion.section>
    );
};

export default ProjectCard;

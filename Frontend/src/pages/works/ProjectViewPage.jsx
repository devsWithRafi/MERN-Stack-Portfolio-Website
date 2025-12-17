import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProjectContext } from '../../context/project-data-context/ProjectContext';
import SectionHeader from '../../components/SectionHeader';
import { IoIosArrowBack } from 'react-icons/io';
import LinkButton from '../../components/UI/LinkButton';
import TaggedText from '../../components/UI/TaggedText';
import { BiSolidDetail } from 'react-icons/bi';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';

const ProjectViewPage = () => {
    const { data } = useContext(ProjectContext);
    const { id } = useParams();
    const selectedProject = data?.find((item) => item._id === id);

    return (
        <>
            {!selectedProject ? (
                <div className="w-full h-full flex items-center justify-center relative">
                    <div className="absolute top-0 left-0">
                        <LinkButton
                            text={'Back'}
                            icone={<IoIosArrowBack size={20} />}
                            to={'/works'}
                        />
                    </div>
                    <h1 className="text-[20px] font-medium text-gray-400">
                        404 | Oops Project Not Found
                    </h1>
                </div>
            ) : (
                <section className="w-full h-auto">
                    <div className="py-5">
                        <SectionHeader
                            title={selectedProject?.title}
                            icon={<BiSolidDetail />}
                        />
                    </div>
                    {/* about the project */}
                    <div>
                        {/* Dates and created details */}
                        <div className="flex flex-col text-[15px]">
                            <div className="flex md:flex-row flex-col items-center justify-between gap-0 md:gap-10">
                                <TaggedText
                                    textLeft={'Created By:'}
                                    textRight={selectedProject?.createdBy}
                                />
                                <TaggedText
                                    textLeft={'Date:'}
                                    textRight={selectedProject?.date}
                                />
                            </div>
                            <div className="flex md:flex-row flex-col items-center justify-between gap-0 md:gap-10">
                                <TaggedText
                                    textLeft={'Client:'}
                                    textRight={selectedProject?.client}
                                />
                                <TaggedText
                                    textLeft={'Project Type:'}
                                    textRight={selectedProject?.projectType}
                                />
                            </div>
                        </div>

                        {/* image */}
                        <div className="w-full overflow-hidden mt-10">
                            <img
                                src={selectedProject?.image}
                                alt={selectedProject?.title}
                                className="w-full"
                            />
                        </div>

                        {/* descriptions */}
                        <div className="py-10 text-[14px]">
                            <p className="dark:text-gray-400 text-gray-500 text-[15px] font-medium">
                                {selectedProject?.description}
                            </p>

                            {/* technology used */}
                            <div className="mt-10">
                                <h3 className="bg-green/90 text-gray-900 font-medium px-2 py-[1px] inline text-[15px]">
                                    Technology Used:
                                </h3>

                                <div className="flex flex-wrap w-full gap-4 mt-5">
                                    {selectedProject?.techUsed.map(
                                        (item, index) => (
                                            <span
                                                key={index}
                                                className="dark:border-gray-800 border-0 dark:text-gray-400 text-gray-500 dark:border px-4 py-1 rounded-full dark:bg-gray-900 bg-gray-100 cursor-pointer dark:hover:bg-green hover:bg-green hover:text-white dark:hover:text-gray-900 ease-in-out duration-300"
                                            >
                                                {item}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* features */}
                            <div className="list-disc list-inside mt-10">
                                <h3 className="bg-green/90 text-gray-900 font-medium px-2 py-[1px] inline text-[15px] ">
                                    Features:
                                </h3>
                                <div className="mt-3">
                                    {selectedProject?.features.map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className="text-green mt-1"
                                            >
                                                <span className="dark:text-gray-400 text-gray-500">
                                                    {item}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* bottom part */}
                            <div className="mt-10 flex gap-5 sm:flex-row flex-col sm:items-center justify-between py-10">
                                <LinkButton
                                    text={'Back'}
                                    icone={<IoIosArrowBack size={20} />}
                                    to={'/works'}
                                    className={'sm:order-1 order-2'}
                                />

                                <div className="flex sm:justify-center justify-between gap-2 sm:order-2 order-1">
                                    <a
                                        href={selectedProject.sourceCodeUrl}
                                        target="_blank"
                                        className="flex items-center gap-1 dark:bg-white/5 bg-gray-100 dark:text-gray-400 px-5 py-2 font-medium rounded-full border dark:border-white/10 cursor-pointer hover:border-green dark:hover:text-black hover:text-black dark:hover:bg-green hover:bg-green ease-in-out duration-300"
                                    >
                                        <IoLogoGithub size={18} />
                                        <p className="leading-3">Source Code</p>
                                    </a>

                                    {selectedProject.previewURL && (
                                        <a
                                            href={selectedProject.previewURL}
                                            target="_blank"
                                            className="flex items-center gap-2 dark:bg-white/5 bg-gray-100 dark:text-gray-400 px-5 py-2 font-medium rounded-full border dark:border-white/10 cursor-pointer dark:hover:bg-green hover:border-green dark:hover:text-black hover:text-black hover:bg-green ease-in-out duration-300"
                                        >
                                            <p className="leading-3">
                                                Live Demo
                                            </p>
                                            <FaArrowUpRightFromSquare
                                                size={13}
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default ProjectViewPage;

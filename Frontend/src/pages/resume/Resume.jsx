import SectionHeader from '../../components/SectionHeader';
import { FaFileSignature } from 'react-icons/fa';
import TagOutline from '../../components/TagOutline';
import EducationCard from './EducationCard';
import { FaAward } from 'react-icons/fa6';
import { GiGraduateCap } from 'react-icons/gi';
import { AiOutlineLineChart } from 'react-icons/ai';
import { useFetchData } from '../../hooks/useFetchData';
import { useState } from 'react';
import Modal from '../../components/Modal';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const githubState1 =
    'https://github-readme-stats.vercel.app/api?username=devsWithRafi&show_icons=true&theme=radical&cache_seconds=60';
const githubState2 =
    'https://github-readme-stats.vercel.app/api/top-langs/?username=devsWithRafi&layout=compact&theme=radical&cache_seconds=60';
const githubStatusChart =
    'https://github-readme-activity-graph.vercel.app/graph?username=devsWithRafi&bg_color=0d1117&color=ff4d7a&line=ff1a4d&point=ff6680&area=true&hide_border=true';

const Resume = () => {
    const { data } = useFetchData(
        `${import.meta.env.VITE_SERVER_URL}/api/certification`
    );
    const [findEduData, setFindEduData] = useState({});
    const [showEduPopup, setShowEduPopup] = useState(false);
    const handleEduCardClick = (cardIndex) => {
        const findData = data.certifications?.find(
            (_, index) => cardIndex === index
        );
        setFindEduData(findData);
        setShowEduPopup((prev) => !prev);
    };

    return (
        <section id="resume">
            <SectionHeader icon={<FaFileSignature />} title={'Resume'} />
            {/* Education section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 w-full gap-2">
                <section className="py-10 relative w-full">
                    {/* top */}
                    <div className="w-full">
                        <TagOutline
                            text={'CERTIFICATION'}
                            icone={<GiGraduateCap size={20} />}
                        />
                    </div>
                    {/* bottom */}
                    <div className="flex flex-col relative justify-center mt-5">
                        <span className="absolute left-0 w-[1px] dark:bg-white/15 bg-gray-300 h-[80%]"></span>
                        {/* certification section card */}
                        {data.certifications?.map((data, index) => (
                            <div
                                key={index}
                                onClick={() => handleEduCardClick(index)}
                                className="relative px-3.5 py-3"
                            >
                                <EducationCard
                                    eduData={data}
                                    LinkBtnName={'Certificate'}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-10 relative w-full">
                    {/* top */}
                    <div className="w-full">
                        <TagOutline text={'EDUCATION'} icone={<FaAward />} />
                    </div>

                    {/* bottom */}
                    <div className="flex flex-col relative justify-center mt-5">
                        <span className="absolute left-0 w-[1px] dark:bg-white/15 bg-gray-300 h-[80%]"></span>

                        {/* education section card */}
                        {data.education?.map((data, index) => (
                            <div key={index} className="relative px-3.5 py-3">
                                <EducationCard
                                    eduData={data}
                                    LinkBtnName={'about college'}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            {/* Github status section */}
            <div>
                <TagOutline
                    text={'gituhub status'}
                    icone={<AiOutlineLineChart size={20} />}
                />
                <h1 className="text-gray-900 dark:text-gray-200 mt-5 sm:text-[25px] text-[20px] font-medium">
                    Here are the latest GitHub Activity of Mine.
                </h1>
                <div className="flex flex-col gap-5 mt-10">
                    {/* top */}
                    <div className="grid sm:grid-cols-2 grid-cols-1 justify-between items-start w-full gap-5 lg:flex-col">
                        <img
                            src={githubState1}
                            alt="Devs With Rafi GitHub stats"
                            className="w-full"
                        />
                        <img
                            src={githubState2}
                            alt="Top Languages"
                            className="w-full"
                        />
                    </div>
                    {/* bottom */}
                    <div className="w-full">
                        <img
                            src={githubStatusChart}
                            alt=""
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
            {/* popup */}
            {showEduPopup && (
                <Modal
                    className={
                        'sm:w-[700px] w-[90%] h-[90vh] max-[490px]:h-auto'
                    }
                    closeModal={() => setShowEduPopup((prev) => !prev)}
                >
                    {/* Popup */}
                    <div className="sm:p-5 sm:mt-0 mt-5">
                        {/* image */}
                        <div className="w-full relative">
                            <img
                                src={findEduData.certificateImage}
                                alt=""
                                className="w-full"
                            />
                            <p className="absolute bottom-5 right-5 bg-green text-white font-semibold font-font2 px-5 py-1.5 shadow-md max-[490px]:text-[12px] max-[490px]:px-3 max-[490px]:py-1">
                                {findEduData.fromWhere}
                            </p>
                        </div>
                        {/* descriptions */}
                        <div className="flex flex-col gap-2 py-5">
                            <h1 className="text-[27px] font-medium dark:text-white text-zinc-900 max-[490px]:text-[20px]">
                                {findEduData.subject}
                            </h1>
                            <p className="dark:text-gray-400 text-gray-500 font-medium text-[14px] max-[490px]:text-[12px] uppercase">
                                Issued on:
                                <span className="text-green ml-2">
                                    {findEduData.years}
                                </span>
                            </p>
                            <p className="dark:text-gray-400 text-gray-500 text-[15px] mt-5 font-medium max-[490px]:text-[13px]">
                                {findEduData.desc}
                            </p>
                            {/* see proof button */}
                            <a
                                href={findEduData.aboutLink}
                                target="_blank"
                                className="w-[200px] flex items-center justify-center py-2 gap-2 dark:bg-gray-800 bg-gray-200 dark:hover:bg-gray-700 font-medium mt-10 dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-white hover:bg-green ease-in-out duration-300 max-[490px]:text-[12px] max-[490px]:w-full"
                            >
                                <p>View Certificates</p>
                                <MdOutlineArrowForwardIos />
                            </a>
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default Resume;

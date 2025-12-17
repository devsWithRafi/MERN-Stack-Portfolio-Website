import { MdArrowForwardIos } from 'react-icons/md';

const EducationCard = ({ eduData = {}, LinkBtnName }) => {
    return (
        <section className="bg-white/5 backdrop-blur-[50px] w-full p-5 rounded-[20px] relative dark:shadow-0 shadow-sm bg-gray-200 border border-zinc-200 dark:border-white/10">
            <span className="absolute w-2.5 h-2.5 rounded-full bg-[#8F8F8F] -left-5 top-10"></span>
            {/* top */}
            <div className="flex items-start justify-between w-full">
                <div>
                    {/* date */}
                    <p className="font-[400] sm:text-[15px] text-[13px] dark:text-green/90 text-gray-500 border dark:border-white/10 border-gray-400 inline px-3 py-0.5 rounded-full">
                        {eduData.years}
                    </p>
                    {/* title */}
                    <h1 className="sm:text-[20px] text-[16px] mt-3 font-medium">
                        {eduData.subject}
                    </h1>
                    {/* from where */}
                    <p className="font-[300] dark:text-gray-400 text-gray-500 sm:text-[15px] text-[13px]">
                        {eduData.fromWhere}
                    </p>
                </div>
                {/* logo */}
                <div className="w-[45px] h-[45px] rounded overflow-hidden grayscale-[90] opacity-[0.3]">
                    <img src={eduData.logo} alt="" className="w-full h-full" />
                </div>
            </div>
            {/* description */}
            <p className="dark:text-gray-400 text-gray-500 sm:text-[14px] text-[13px] mt-4">
                {eduData.desc.slice(0, 130)}...
            </p>
            {/* certificates button */}
            <a
                href={eduData.aboutLink}
                target="_blank"
                className="flex items-center uppercase gap-2 mt-5 tracking-[1px] sm:text-[17px] text-[15px]  dark:hover:text-green hover:text-green transition-all group font-medium"
            >
                <p className="uppercase">{LinkBtnName}</p>
                <MdArrowForwardIos className="group-hover:ml-1 transition-all" />
            </a>
        </section>
    );
};

export default EducationCard;

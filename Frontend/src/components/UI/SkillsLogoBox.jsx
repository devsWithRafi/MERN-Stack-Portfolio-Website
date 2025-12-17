const SkillsLogoBox = ({ data }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 p-4 sm:w-[135px] w-[100px] sm:h-[135px] h-[100px] rounded-[20px] dark:bg-white/5 border backdrop-blur-[50px] dark:border-white/20 border-gray-300 cursor-pointer dark:hover:bg-white/10 dark:hover:border hover:border-0 hover:shadow-md ease-in-out duration-300 group max-[420px]:w-full max-[420px]:h-auto max-[420px]:aspect-square">
            {/* logo */}
            <div className="sm:w-[60px] w-[40px] sm:h-[60px] min-h-[40px] dark:border-0 border border-gray-200 rounded-full overflow-hidden bg-white flex items-center justify-center sm:p-2 p-0.5 ease-in-out duration-300 max-[420px]:w-[65px] max-[420px]:h-[65px]">
                <img
                    src={data.logo}
                    alt={data.name}
                    className="w-full scale-[0.8] grayscale-[90] group-hover:scale-[0.9]  group-hover:grayscale-0 ease-in-out duration-300"
                />
            </div>
            {/* logo name */}
            <h2 className="font-font2 font-medium text-gray-700 dark:text-gray-200 sm:text-[16px] text-[12px] max-[420px]:text-[17px]">
                {data.name}
            </h2>
        </div>
    );
};

export default SkillsLogoBox;

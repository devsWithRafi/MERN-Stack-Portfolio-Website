const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="dark:bg-[#111216] bg-white dark:border-0 border-t w-full py-3 flex items-center justify-center">
            <p className="dark:text-gray-400 text-gray-500 font sm:text-[0.9rem] text-[12px] text-center text-wrap sm:w-full w-[80%]">
                © {year} - All Rights Reserved | Powered by
                <span className="text-green ml-2">Saiful Islam</span>
            </p>
        </div>
    );
};

export default Footer;

import LogoLoopUse from '../../components/UI/logoLoop/LogoLoopUse';

const Home = () => {
    return (
        <section className="py-5 w-full">
            <p className="sm:text-[1.5rem] text-[15px]">
                Hello, I’m <span className="text-green">Saiful Islam Rafi</span>
            </p>

            <h1 className="sm:text-[3rem] text-[25px] font-medium text-wrap dark:text-gray-200 mt-5 text-gray-800">
                Frontend Developer Building Scalable Apps with{' '}
                <span className="bg-[linear-gradient(45deg,#FFFFFF,green)] bg-clip-text text-transparent">
                    MERN Stack
                </span>{' '}
                And Aspiring Full-Stack Engineer
            </h1>

            <p className="font-medium font-font2 dark:text-gray-400 text-gray-500 sm:text-[20px] text-[15px] mt-5">
                I'm currently focused on crafting modern, user-centric frontend
                interfaces and building scalable, SEO-optimized web applications
                for enhanced performance using React.js and Next.js. I'm
                actively learning the MERN stack to develop comprehensive
                full-stack solutions with robust database architecture and AI
                chatbot integrations.
            </p>

            {/* Logo animation */}
            <div
                className="overflow-hidden relative mt-10 py-5  
        dark:text-gray-400 text-gray-500 box-border grid grid-cols-1 items-center"
            >
                <div className="w-full">
                    <LogoLoopUse />
                </div>
            </div>
        </section>
    );
};

export default Home;

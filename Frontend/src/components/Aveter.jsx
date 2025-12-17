import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import TextType from './UI/TextType';
import Menu from './Menu';
import Button from './UI/Button';
import { MenuContext } from '../context/menu-context/MenuContext';
import { useContext } from 'react';
import profileImage from '../assets/images/profile2.png';

const Aveter = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

    return (
        <section className="w-full h-full relative overflow-hidden rounded-[40px] border dark:border-white/30 sm:p-10 p-7 dark:shadow-md shadow-sm backdrop-blur-[50px] dark:bg-black/20 bg-white/20 border-gray-200">
            <div className="w-full relative h-full flex lg:flex-col flex-col md:flex-row sm:gap-10 justify-between lg:justify-start lg:gap-0 items-center lg:items-start">
                {/* menu */}
                <div className="hidden lg:flex w-full">
                    <Menu isMenuOpen={isMenuOpen} menuOnClick={setIsMenuOpen} />
                </div>
                {/* Image */}
                <div className="w-full rounded-[20px] overflow-hidden aspect-square">
                    <img
                        src={profileImage}
                        className="w-full scale-[1.1] relative"
                    />
                </div>
                {/* bottom */}
                <div className="flex flex-col items-center mt-5 relative w-full">
                    <h3
                        className="dark:text-gray-200 text-gray-900 text-[35px] font-semibold
                "
                    >
                        Saiful Islam
                    </h3>
                    <div className="font-font2 dark:text-gray-400 text-gray-500 uppercase">
                        <TextType
                            text={[
                                'Frontend Developer',
                                'Mern stack learner',
                                'Happy coding!',
                            ]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </div>
                    {/* social links */}
                    <div className="flex w-full gap-3 items-center justify-center mt-10">
                        {/* linkedin */}
                        <a
                            href="https://www.linkedin.com/in/saiful-islam-rafi-6705602a6/"
                            target="_blank"
                            className="border border-gray-500 dark:border-white/20 w-[45px] h-[45px] rounded-full flex items-center justify-center dark:text-gray-400 text-gray-600 dark:hover:text-green hover:text-gray-900 duration-200 cursor-pointer ease-in-out"
                        >
                            <FaLinkedin />
                        </a>
                        {/* twitter */}
                        <a
                            href="https://x.com/SaifulIsla55717"
                            target="_blank"
                            className="border border-gray-500 dark:border-white/20 w-[45px] h-[45px] rounded-full flex items-center justify-center dark:text-gray-400 text-gray-600 dark:hover:text-green hover:text-gray-900 duration-200 cursor-pointer ease-in-out"
                        >
                            <FaSquareXTwitter />
                        </a>
                        {/* github */}
                        <a
                            href="https://github.com/devsWithRafi"
                            target="_blank"
                            className="border border-gray-500 dark:border-white/20 w-[45px] h-[45px] rounded-full flex items-center justify-center dark:text-gray-400 text-gray-600 dark:hover:text-green hover:text-gray-900 duration-200 cursor-pointer ease-in-out"
                        >
                            <FaGithubSquare />
                        </a>
                        {/* whatsApp */}
                        <a
                            href="https://wa.me/8801316999517"
                            target="_blank"
                            className="border border-gray-500 dark:border-white/20 w-[45px] h-[45px] rounded-full flex items-center justify-center dark:text-gray-400 text-gray-600 dark:hover:text-green hover:text-gray-900 duration-200 cursor-pointer ease-in-out"
                        >
                            <FaWhatsappSquare />
                        </a>
                    </div>
                    <div className="flex lg:hidden w-full">
                        <Button>
                            <HiDownload size={20} />
                            Download CV
                        </Button>
                    </div>
                </div>
                {/* download button */}
                <div className="hidden lg:flex">
                    <Button>
                        <HiDownload size={20} />
                        Download CV
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Aveter;

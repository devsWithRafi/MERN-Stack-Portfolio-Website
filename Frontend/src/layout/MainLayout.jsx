import Footer from '../components/Footer';
import { Outlet, useParams } from 'react-router-dom';
import Aveter from '../components/Aveter';
import Menu from '../components/Menu';
import { MenuContext } from '../context/menu-context/MenuContext';
import { useContext, useState } from 'react';
import TextType from '../components/UI/TextType';
import Home from '../pages/home/Home';
import Wroks from '../pages/works/Works';
import Resume from '../pages/resume/Resume';
import Skills from '../pages/skills/Skills';
import Contact from '../pages/contact/Contact';
import ProjectViewPage from '../pages/works/ProjectViewPage';
import NavBar from '../components/Navbar';

const MainLayout = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { id } = useParams();
    const useParamsId = Boolean(id);

    return (
        <main className="w-full lg:max-h-screen lg:h-screen h-auto lg:overflow-hidden flex relative mx-auto max-w-[1500px] items-center justify-center sm:px-10 lg:px-0 lg:flex-row flex-col lg:mt-0 md:mt-[15%] sm:mt-[20%] mt-[25%]">
            {/* Nav bar for mobile */}
            <div className="flex flex-col md:hidden w-full dark:bg-black/50 bg-white/90 backdrop-blur-[50px] px-5 overflow-hidden  fixed top-0 left-0 right-0 z-[1111111111111] dark:border-b dark:border-white/20 border-0  py-4 items-center justify-between shadow-md">
                {/* Menu for mobile */}
                <div className="flex w-full items-center justify-between">
                    <div>
                        <h1>Saiful Islam Rafi</h1>
                        <div className="text-[12px] text-green font-font2">
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
                    </div>
                    <Menu
                        menuOnClick={setMobileMenuOpen}
                        isMenuOpen={mobileMenuOpen}
                    />
                </div>
                <div
                    className={`w-full overflow-hidden ease-in-out duration-300
               ${mobileMenuOpen ? 'max-h-auto mt-5' : 'max-h-0'}`}
                >
                    <NavBar />
                </div>
            </div>
            {/* Nav bar for tablet */}
            <div className="md:flex hidden lg:hidden w-full dark:bg-black/50 bg-white/90 backdrop-blur-[50px] px-5 overflow-hidden  fixed top-0 left-0 right-0 z-[1111111111111] border-b border-white/20 py-6 items-center justify-between shadow-md">
                <NavBar />
                {/* Menu for tablet */}
                <div className="flex">
                    <Menu isMenuOpen={isMenuOpen} menuOnClick={setIsMenuOpen} />
                </div>
            </div>
            {/* conteiner */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start w-full lg:h-[90vh] lg:max-h-[720px] h-auto relative gap-10">
                {/* left part */}
                <section className="lg:min-w-[400px] lg:max-w-[400px] lg:min-h-0 md:w-full lg:mx-0 mx-auto sm:w-[98%] w-[98%] flex justify-center">
                    <Aveter />
                </section>
                {/* right part */}
                <section className="max-w-full w-full relative max-h-full flex flex-col">
                    {/* Nav bar for desktop */}
                    <div className="hidden lg:flex w-full">
                        <NavBar />
                    </div>
                    {/* main content */}
                    <div className="lg:h-full lg:overflow-y-auto p-5 sm:px-10 dark:backdrop-blur-[50px] dark:bg-black/20 rounded-xl">
                        {/* for desktop view */}
                        <section className="w-full hidden lg:flex lg:flex-col">
                            <Outlet />
                        </section>
                        {/* for mobile or tablet view */}
                        <section className="w-full lg:hidden flex flex-col gap-5 pb-20">
                            {!useParamsId ? (
                                <div className="flex flex-col gap-5">
                                    <Home />
                                    <Wroks />
                                    <Resume />
                                    <Skills />
                                    <Contact />
                                </div>
                            ) : (
                                <ProjectViewPage />
                            )}
                        </section>
                    </div>
                </section>
            </div>
            {/* footer */}
            <div className="md:absolute bottom-0 w-screen">
                <Footer />
            </div>
        </main>
    );
};

export default MainLayout;

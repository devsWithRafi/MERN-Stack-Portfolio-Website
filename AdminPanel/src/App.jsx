import { Route, Routes } from 'react-router';
import FormInputs from './components/FormInputs';
import Sidebar from './components/Sidebar';
import MainLayout from './layout/MainLayout';
import ProjectsPage from './components/ProjectsPage';
import { useContext } from 'react';
import { SideberContext } from './context/sideber-context/SideberContext';
import SingleProjectView from './components/SingleProjectView';
import ProtectedRoute from './auth/ProtectedRoute';
import Login from './pages/Login';
import BackImage from './components/ui/background-image/BackImage';
import { SideberExpendContext } from './context/sideber-expend-context/SideberExpendContext';

const App = () => {
    const { isOpen, setIsOpen } = useContext(SideberContext);
    const { isSidebarExpanded } = useContext(SideberExpendContext);

    return (
        <>
            <div className="lg:h-screen bg-black flex items-center justify-center">
                {/* bg image */}
                <div>
                    <BackImage />
                </div>
                <Routes>
                    {/* login page */}
                    <Route path="/login" element={<Login />} />

                    {/* home page */}
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <MainLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="" index element={<ProjectsPage />} />
                        <Route
                            path="/create-new-project"
                            element={<FormInputs />}
                        />
                        <Route
                            path="/:title/:id"
                            element={<SingleProjectView />}
                        />
                    </Route>
                </Routes>
                {/* sidebar */}
                <div
                    onClick={() => setIsOpen((prev) => !prev)}
                    className={`lg:hidden z-[99999999999999] fixed w-screen top-0 h-screen left-0 duration-300 ease-in-out bg-black/30 backdrop-blur-sm
                    ${isOpen ? 'translate-x-[0%]' : 'translate-x-[-100%]'}`}
                >
                    <Sidebar
                        className={`${
                            isSidebarExpanded
                                ? 'sm:w-[350px] w-full'
                                : 'sm:w-[80px] w-[80px]'
                        } backdrop-blur-[100px] drop-shadow-lg border-0 border-r`}
                    />
                </div>
            </div>
        </>
    );
};

export default App;

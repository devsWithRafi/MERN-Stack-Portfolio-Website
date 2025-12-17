import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/home/Home';
import BGimage from './components/UI/bg-image/BGimage';
import Works from './pages/works/Works';
import Resume from './pages/resume/Resume';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';
import PageNotfound from './pages/PageNotfound';
import ProjectViewPage from './pages/works/ProjectViewPage';
import Sidebar from './components/SideBar';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '', index: true, element: <Home /> },
                { path: '/works', element: <Works /> },
                { path: '/resume', element: <Resume /> },
                { path: '/skills', element: <Skills /> },
                { path: '/contact', element: <Contact /> },
                {
                    path: '*',
                    element: (
                        <PageNotfound
                            text={'| Oops Page Not Found!'}
                            statusCode={'404'}
                        />
                    ),
                },
                // project view page
                {
                    path: '/works/:title/:id',
                    element: <ProjectViewPage />,
                },
            ],
        },
    ]);
    return (
        <>
            {/* All content */}
            <section className="w-screen lg:h-screen h-auto flex items-center justify-center lg:px-10">
                <BGimage />
                <Sidebar />
                <RouterProvider router={router} />
            </section>
        </>
    );
};

export default App;

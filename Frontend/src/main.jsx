import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import MenuProvider from './context/menu-context/MenuProvider.jsx';
import ProjectProvider from './context/project-data-context/ProjectProvider.jsx';

createRoot(document.getElementById('root')).render(
    <MenuProvider>
        <ProjectProvider>
            <App />
        </ProjectProvider>
    </MenuProvider>
);

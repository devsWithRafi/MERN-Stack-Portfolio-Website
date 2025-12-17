import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ProjectProvider from './context/project-provider.jsx';
import { BrowserRouter } from 'react-router';
import SideberProvider from './context/sideber-context/SideberProvider.jsx';
import { AuthProvider } from './auth/AuthProvider.jsx';
import './index.css';
import SideberExpendProvider from './context/sideber-expend-context/SideberExpendProvider.jsx';

createRoot(document.getElementById('root')).render(
    <ProjectProvider>
        <BrowserRouter>
            <SideberProvider>
                <SideberExpendProvider>
                    <AuthProvider>
                        <App />
                    </AuthProvider>
                </SideberExpendProvider>
            </SideberProvider>
        </BrowserRouter>
    </ProjectProvider>
);

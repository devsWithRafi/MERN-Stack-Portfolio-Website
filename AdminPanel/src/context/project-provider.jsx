import { ProjectContext } from './projects-context';
import { useFetch } from '../hooks/useFetch';

const ProjectProvider = ({ children }) => {
    const fetchState = useFetch(import.meta.env.VITE_PROJECT_FETCH_URL);

    return (
        <ProjectContext.Provider value={fetchState}>
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectProvider;

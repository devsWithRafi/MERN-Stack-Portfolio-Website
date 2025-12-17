import { useFetchData } from '../../hooks/useFetchData';
import { ProjectContext } from './ProjectContext';

const projectsDataUrl = `${import.meta.env.VITE_SERVER_URL}/api/projects`;

const ProjectProvider = ({ children }) => {
    const { data, error, isLoading } = useFetchData(projectsDataUrl);

    return (
        <ProjectContext.Provider value={{ data, error, isLoading }}>
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectProvider;

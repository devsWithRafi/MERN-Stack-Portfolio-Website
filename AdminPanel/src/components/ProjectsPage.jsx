import { useProjectData } from '../hooks/useProjectData';
import ProjectCard from './ProjectCard';

const ProjectsPage = () => {
    const { data } = useProjectData();

    console.log('project data:', data);

    return (
        <section className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 px-5 pb-10 gap-5 lg:overflow-y-auto lg:max-h-full justify-center">
            {data.map((item) => (
                <ProjectCard key={item._id} data={item} />
            ))}
        </section>
    );
};

export default ProjectsPage;

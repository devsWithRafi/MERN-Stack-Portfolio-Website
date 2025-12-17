import { GiOpenFolder } from 'react-icons/gi';
import SectionHeader from '../../components/SectionHeader';
import { useContext, useState } from 'react';
import ProjectCard from './ProjectCard';
import { cn } from '../../Util/Util';
import { ProjectContext } from '../../context/project-data-context/ProjectContext';
import Loader from '../../components/UI/loader/Loader';
import PageNotfound from '../PageNotfound';

const Works = () => {
    const [category, setCategory] = useState('All');
    const { data, isLoading, error } = useContext(ProjectContext);

    const filterData =
        category === 'All'
            ? data
            : data?.filter(
                  (item) =>
                      item.category.replaceAll(' ', '').toLowerCase() ===
                      category.replaceAll(' ', '').toLowerCase()
              );

    return (
        <section id="works" className="w-full relative min-h-full h-auto">
            {/* header */}
            <SectionHeader
                title="Portfolio"
                icon={<GiOpenFolder className="text-green" />}
                buttons={['All', 'Frontend', 'FullStack']}
                active={category}
                onButtonClick={setCategory}
            />
            {isLoading ? (
                <div className="absolute py-2 left-0">
                    <Loader />
                </div>
            ) : !data || error || data.length === 0 ? (
                <div className="w-full sm:h-[400px] h-[300px] border dark:border-white/15 flex items-center justify-center mt-10">
                    <PageNotfound
                        text={'Oops Project Not Found!'}
                        className={'text-[15px] lg:text-[20px]'}
                    />
                </div>
            ) : (
                // projects
                <div
                    className={cn(
                        'py-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 gap-x-10 w-full'
                    )}
                >
                    {[...filterData].reverse()?.map((item) => (
                        <ProjectCard key={item._id} projectData={item} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Works;

import { MdOutlineCodeOff } from 'react-icons/md';
import SectionHeader from '../../components/SectionHeader';
import TagOutline from '../../components/TagOutline';
import { skills } from './skillsDetails';
import { RiToolsFill } from 'react-icons/ri';
import { AiOutlineCode } from 'react-icons/ai';
import { SiCompilerexplorer } from 'react-icons/si';
import SkillsLogoBox from '../../components/UI/SkillsLogoBox';

const Skills = () => {
    return (
        <section id="skills" className="py-10">
            <SectionHeader icon={<MdOutlineCodeOff />} title={'Skills'} />
            <div className="py-5 mt-5">
                {/* technology sections */}
                <TagOutline
                    text={'Comfortable With'}
                    icone={<SiCompilerexplorer />}
                />
                <section
                    className="py-5 flex flex-wrap justify-start gap-5 mb-10 
                max-[420px]:grid max-[420px]:grid-cols-2 w-full"
                >
                    {/* technology i use */}
                    {skills.comfortableWith?.map((item, index) => (
                        <SkillsLogoBox key={index} data={item} />
                    ))}
                </section>
                {/* New Learning skills */}
                <TagOutline
                    text={'New Learning'}
                    icone={<AiOutlineCode size={18} />}
                />
                <section
                    className="py-5 flex flex-wrap justify-start gap-5 mb-10
                max-[420px]:grid max-[420px]:grid-cols-2 w-full"
                >
                    {skills.learning?.map((item, index) => (
                        <SkillsLogoBox key={index} data={item} />
                    ))}
                </section>
                {/* tols and IDE */}
                <TagOutline
                    text={'Additional / Tools'}
                    icone={<RiToolsFill size={18} />}
                />
                <section
                    className="py-5 flex flex-wrap justify-start gap-5
                max-[420px]:grid max-[420px]:grid-cols-2 w-full"
                >
                    {skills.tols?.map((item, index) => (
                        <SkillsLogoBox key={index} data={item} />
                    ))}
                </section>
            </div>
        </section>
    );
};

export default Skills;

import LogoLoop from './LogoLoop';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiDocker,
    SiFastapi,
    SiPython,
    SiSocketdotio,
    SiPostman,
} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io5';
import { RiFirebaseFill } from 'react-icons/ri';

const techLogos = [
    { node: <SiReact /> },
    { node: <SiNextdotjs /> },
    { node: <SiJavascript /> },
    { node: <SiTailwindcss /> },
    { node: <SiTypescript /> },
    { node: <IoLogoNodejs /> },
    { node: <RiFirebaseFill /> },
    { node: <SiExpress /> },
    { node: <SiMongodb /> },
    { node: <SiDocker /> },
    { node: <SiSocketdotio /> },
    { node: <SiPython /> },
    { node: <SiFastapi /> },
    { node: <SiPostman /> },
];

const LogoLoopUse = () => {
    return (
        <div
            style={{ position: 'relative', overflow: 'hidden' }}
            className="sm:text-[70px] text-[45px] pointer-events-none select-none max-w-max"
        >
            <LogoLoop
                logos={techLogos}
                speed={50}
                direction="left"
                gap={70}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor=""
                ariaLabel="Technology partners"
            />
        </div>
    );
};

export default LogoLoopUse;

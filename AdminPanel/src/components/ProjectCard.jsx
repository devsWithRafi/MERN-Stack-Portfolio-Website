import { FiEdit } from 'react-icons/fi'; // edit
import { MdDeleteForever } from 'react-icons/md'; // delete
import IconButton from './ui/IconButton';
import { Link } from 'react-router';

const ProjectCard = ({ data, onClick }) => {
    return (
        <section
            onClick={onClick}
            className="w-full bg-black/15 backdrop-blur-[30px] border border-white/15 shadow-md rounded-[10px] overflow-hidden cursor-pointer"
        >
            {/* image */}
            <div className="w-full aspect-[2/1.3] flex items-center justify-center relative">
                <img src={data.image} className="w-full h-full" />
                <span className="absolute top-3 left-4 px-3 rounded-full text-[11px] py-0.5 bg-primary text-white shadow font-medium">
                    {data.date}
                </span>
            </div>
            {/* info */}
            <div className="px-5 py-5">
                <p className='text-white uppercase text-[12px] border border-white/20 px-2 py-[2px] inline'>{data.category}</p>
                <h1 className="font-medium text-xl text-gray-200 mt-3">
                    {data.title.slice(0, 25)}
                </h1>
                <p className="mt-2 text-gray-400 font-[400] text-[14px]">
                    {data.description.slice(0, 70) + '...'}
                </p>
                {/* edit and delete */}
                <div className="flex items-center gap-2 mt-4">
                    <IconButton
                        onClick={() =>
                            alert('This Feature is currently unabilable!')
                        }
                        className={'h-[35px] w-[35px] p-0'}
                    >
                        <FiEdit />
                    </IconButton>
                    <Link
                        to={`/${data.title
                            .replaceAll(' ', '-')
                            .toLowerCase()}/${data._id}`}
                    >
                        <IconButton className={'h-[35px] w-[35px] p-0'}>
                            <MdDeleteForever size={18} />
                        </IconButton>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;

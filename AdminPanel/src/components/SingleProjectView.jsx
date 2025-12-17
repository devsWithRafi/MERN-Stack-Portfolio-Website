import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import IconButton from './ui/IconButton';
import { useNavigate, useParams } from 'react-router';
import { deleteProject } from '../hooks/deleteProject';
import Modal from './Modal';
import DeletePopup from './ui/DeletePopup';
import { useProjectData } from '../hooks/useProjectData';
import { useState } from 'react';

const SingleProjectView = ({ onEdit }) => {
    const deleteUrl = import.meta.env.VITE_PROJECT_FETCH_URL;

    const [showWarning, setShowWarning] = useState(false);

    const { reFetch } = useProjectData();

    const { id } = useParams();
    const { data } = useProjectData();
    const findProject = data.find((item) => item._id === id);

    // delete
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteProject(deleteUrl, id);
        reFetch();

        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    return (
        <div className="bg-black/20 backdrop-blur-[30px] border border-white/20 md:w-[650px] w-[95%] h-[90vh] rounded-lg shadow-md sm:p-6 p-3 flex flex-col justify-between overflow-y-auto overflow-hidden">
            <section>
                {/* image */}
                <div className="w-full relative aspect-[2/1.2] overflow-hidden flex items-center justify-center">
                    <img src={findProject?.image} className="h-full w-full" />
                    <span className="absolute top-3 left-3 uppercase font-medium bg-primary px-5 py-1 rounded-full shadow text-[13px]">
                        {findProject?.date}
                    </span>
                </div>
                {/* info */}
                <h1 className="font-medium uppercase sm:text-3xl text-xl mt-5 text-gray-100">
                    {findProject?.title}
                </h1>
                <p className="text-gray-400 font-medium sm:mt-4 mt-2 sm:text-md text-md">
                    {findProject?.description}
                </p>
            </section>
            {/* edit and delete */}
            <section className="flex items-center sm:justify-start justify-between gap-2 mt-4">
                <IconButton onClick={onEdit}>
                    <FiEdit />
                    <p>edit</p>
                </IconButton>
                <IconButton onClick={() => setShowWarning((prev) => !prev)}>
                    <MdDeleteForever size={18} />
                    <p>delete</p>
                </IconButton>
            </section>

            {/* warning popup */}
            <Modal isOpen={showWarning} setIsOpen={setShowWarning}>
                <DeletePopup
                    onDelete={handleDelete}
                    deleteItemName={findProject?.title}
                />
            </Modal>
        </div>
    );
};

export default SingleProjectView;

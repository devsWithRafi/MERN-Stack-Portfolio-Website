import { IoMdWarning } from 'react-icons/io';
import { useNavigate } from 'react-router';

const DeletePopup = ({ deleteItemName, onDelete }) => {
    const navigate = useNavigate();
    return (
        <section className="bg-white p-8 rounded-xl shadow-md w-[500px] max-[535px]:w-full flex flex-col gap-4">
            <h1 className="text-center font-bold text-2xl">Delete Project</h1>
            <h2 className="font-medium text-gray-700 mt-3 text-center text-[18px]">
                Are you sure you want to delete{' '}
                <span className="font-bold text-black">
                    '{deleteItemName?.slice(0, 15) + '...'}'
                </span>
            </h2>
            <div className="bg-red-600/10 p-3 pl-5 relative overflow-hidden rounded-md">
                <p className="flex items-center gap-1 font-semibold text-red-800 text-[18px]">
                    <IoMdWarning /> Warning
                </p>
                <p className="text-red-700 font-medium text-[14px] w-[90%] mt-1">
                    By Deleteing this project, you won't be able to see it
                    again.
                </p>
                <span className="absolute h-full w-1.5 bg-red-500 top-0 left-0"></span>
            </div>
            {/* cancel and delete button */}
            <div className="flex max-[535px]:flex-col items-center justify-between gap-4 max-[535px]:gap-2 font-medium">
                <button
                    onClick={() => navigate('/')}
                    className="bg-black text-white px-5 py-2 cursor-pointer border border-black hover:bg-transparent hover:text-black ease-in-out duration-300 max-[535px]:w-full"
                >
                    No, Cancel
                </button>
                <button
                    onClick={onDelete}
                    className="bg-transparent text-black px-5 py-2 cursor-pointer border border-black hover:bg-black hover:text-white ease-in-out duration-300 max-[535px]:w-full"
                >
                    Yes, Delete
                </button>
            </div>
        </section>
    );
};

export default DeletePopup;

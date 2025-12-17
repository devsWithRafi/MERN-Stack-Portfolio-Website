import { cn } from '../../Utils/cn';

const IconButton = ({ onClick, children, className }) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                'border border-white/20 text-gray-400 px-5 uppercase font-medium h-[35px] rounded-full flex items-center justify-center text-[15px] shadow-md transition-all hover:bg-white hover:text-black gap-2 cursor-pointer',
                className
            )}
        >
            {children}
        </div>
    );
};

export default IconButton;

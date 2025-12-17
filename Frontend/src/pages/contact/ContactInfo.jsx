import { cn } from '../../Util/Util';

const ContactInfo = ({ className, icon, textKey, textValue }) => {
    return (
        <div
            className={cn(
                'flex flex-row max-[460px]:flex-col w-full items-center max-[460px]:items-start justify-between border dark:border-white/15 border-gray-300 sm:h-[100px] h-auto p-5 sm:rounded-[10px] rounded-[5px] gap-2',
                className
            )}
        >
            <div className="flex items-center gap-2">
                {icon}
                <h2 className="sm:text-[20px] text-[15px]">{textKey}</h2>
            </div>
            <h2 className="sm:text-[20px] text-[15px]">{textValue}</h2>
        </div>
    );
};

export default ContactInfo;

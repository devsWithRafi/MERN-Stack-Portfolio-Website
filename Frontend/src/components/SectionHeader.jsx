import { cn } from '../Util/Util';

const SectionHeader = ({
    title,
    icon = null,
    buttons = [],
    onButtonClick,
    active,
}) => {
    return (
        <section className="w-full flex sm:flex-row flex-col gap-5 sm:items-center justify-between py-2 border-b dark:border-white/15 border-gray-200">
            <h1 className="uppercase font-medium sm:text-[25px] text-[20px] dark:text-gray-200 text-gray-900 flex items-center gap-1 text-wrap">
                <p className="text-green">{icon}</p>
                <p>{title}</p>
            </h1>
            <div className="flex items-center gap-2">
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        onClick={() => onButtonClick(btn)}
                        className={cn(
                            'bg-white/10 rounded-full py-1 px-4 font-[300] text-[14px] border dark:border-white/10 border-gray-400',
                            active === btn &&
                                'bg-green text-gray-900 border-green'
                        )}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default SectionHeader;

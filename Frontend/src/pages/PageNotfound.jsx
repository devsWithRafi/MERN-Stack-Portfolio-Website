import { cn } from '../Util/Util';

const PageNotfound = ({ statusCode = null, text, className = null }) => {
    return (
        <div className="flex items-center justify-center absolute">
            <h1
                className={cn(
                    'text-[25px] dark:text-gray-400 text-gray-700',
                    className
                )}
            >
                <span className="dark:text-red-300 text-green">
                    {statusCode}
                </span>{' '}
                {text}
            </h1>
        </div>
    );
};

export default PageNotfound;

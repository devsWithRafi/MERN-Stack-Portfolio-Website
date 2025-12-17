import { Link } from 'react-router-dom';
import { cn } from '../../Util/Util';

export default function LinkButton({ text, to, icone = null, className }) {
    return (
        <Link
            to={to}
            className={cn(
                'bg-green/90 text-gray-900 px-5 py-1.5 flex font-medium items-center gap-1 hover:shadow-green/30 hover:shadow-lg ease-in-out duration-200 outline-0 border-0',
                className
            )}
        >
            {icone}
            {text}
        </Link>
    );
}

import { cn } from '../../Util/Util';

const TaggedText = ({ textLeft, textRight, style }) => {
  return (
    <span className={cn("flex items-center justify-between w-full border-b dark:border-white/10 border-gray-200 py-3", style)}>
      <h3 className="bg-green/90 dark:text-gray-900 text-white font-medium px-3 py-[2px] rounded">
        {textLeft}
      </h3>
      <p className="dark:text-gray-400 text-gray-500 font-medium">{textRight}</p>
    </span>
  );
};

export default TaggedText;

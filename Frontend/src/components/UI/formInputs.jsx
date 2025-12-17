import { cn } from '../../Util/Util';

const FormInput = ({ type = 'text', placeholder, className, onChange=null, name=null }) => {
  return (
    <input
      type={type}
      name={name}
      required
      placeholder={placeholder}
      className={cn(
        'bg-transparent w-full outline-0 border dark:border-white/20 border-gray-300 dark:focus:placeholder:text-gray-200 focus:placeholder:text-gray-800 px-5 py-3 rounded text-green',
        className
      )}
      onChange={onChange}
    />
  );
};

export default FormInput;

export const FormTexarea = ({ placeholder, className, onChange=null, name=null }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      required
      className={cn(
        'resize-none bg-transparent w-full outline-0 border dark:border-white/20 border-gray-300 dark:focus:placeholder:text-gray-200 focus:placeholder:text-gray-800 px-5 py-3 rounded text-green',
        className
      )}
      onChange={onChange}
    ></textarea>
  );
};

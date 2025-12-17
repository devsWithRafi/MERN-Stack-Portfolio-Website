const Inputs = ({
    placeholder,
    name,
    type = 'text',
    onChange,
    ref = null,
    required = true,
}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            ref={ref}
            className="border border-white/15 bg-transparent sm:px-5 px-3 w-full sm:h-[45px] h-[40px] outline-0 text-primary placeholder:text-gray-500
            focus:placeholder:text-gray-400 focus:border-gray-500 sm:text-[16px] text-[14px]"
        />
    );
};

export default Inputs;

export const TextAreas = ({ placeholder, name, onChange, required = true }) => {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            className="border border-white/15 bg-transparent text-primary placeholder:text-gray-500 sm:p-5 p-3 sm:h-[200px] h-[100px] outline-0 
            focus:placeholder:text-gray-400 focus:border-gray-500 resize-none sm:text-[16px] text-[14px]"
        ></textarea>
    );
};

export const Selects = ({ onChange, name, options = [] }) => {
    return (
        <select
            onChange={onChange}
            name={name}
            className="border border-white/15 bg-transparent sm:px-5 px-3 w-full sm:h-[45px] h-[40px] outline-0 text-primary placeholder:text-gray-500 capitalize
            focus:placeholder:text-gray-400 focus:border-gray-500 sm:text-[16px] text-[14px] text-gray-400"
        >
            {options?.map((ops, idx) => (
                <option
                    key={idx}
                    value={ops}
                    className="text-white bg-black border-b capitalize"
                >
                    {ops}
                </option>
            ))}
        </select>
    );
};

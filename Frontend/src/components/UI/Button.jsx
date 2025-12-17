import { cn } from "../../Util/Util";

const Button = ({ children }) => {
  return (
    <button className={cn("lg:absolute lg:mt-0 mt-10 bottom-0 bgPrimary h-[55px] w-full rounded-full text-gray-800 font-semibold text-[1.1rem] flex items-center justify-center gap-2 hover:shadow-green/30 hover:shadow-lg ease-in-out duration-200 outline-0 border-0")}>
      {children}
    </button>
  );
};

export default Button;

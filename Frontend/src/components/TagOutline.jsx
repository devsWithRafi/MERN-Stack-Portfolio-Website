const TagOutline = ({ text, icone = null }) => {
    return (
        <section className="uppercase dark:text-gray-200 text-gray-500 border dark:border-white/20 border-gray-400 px-7 rounded-full font-medium inline-block text-[15px]">
            <div className="flex items-center justify-center gap-1.5 sm:h-[35px] h-[30px]">
                <p>{icone}</p>
                <p className="leading-3">{text}</p>
            </div>
        </section>
    );
};

export default TagOutline;

const imageLink =
    'https://img.freepik.com/premium-photo/abstract-background-design-hd-caribbean-green-color_851755-75112.jpg';

const BackImage = () => {
    return (
        <div className="fixed w-screen h-screen pointer-events-none select-none right-0 left-0 top-0 bottom-0 blur-[30px] opacity-[0.7]">
            <img
                src={imageLink}
                className="w-full h-full pointer-events-none select-none"
            />
        </div>
    );
};

export default BackImage;

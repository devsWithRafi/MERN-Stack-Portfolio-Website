import './loader.css';

const Loader = () => {
  return (
    <div className="flex items-center gap-x-3 justify-center w-[150px]">
      <div className="text-[20px] relative inline-block w-[1em] h-[1em]">
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
      </div>
      <h2 className='text-[#69717d]'>Loading...</h2>
    </div>
  );
};

export default Loader;

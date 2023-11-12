import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loading = () => {
    return (
        <div className='fixed bg-white z-50 h-full w-full flex justify-center items-center'>
            <div className='w-fit h-fit text-3xl animate-spin'>
                <AiOutlineLoading3Quarters />
            </div>
        </div>
    );
};

export default Loading;

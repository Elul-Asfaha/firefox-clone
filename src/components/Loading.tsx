import { Icons } from "../assets/index";
const Loading = () => {
    return (
        <div className='fixed bg-white z-50 h-full w-full flex justify-center items-center'>
            <div className='w-fit h-fit text-3xl animate-spin'>
                {Icons.AiOutlineLoading3Quarters}
            </div>
        </div>
    );
};

export default Loading;

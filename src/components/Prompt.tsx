import { AiOutlineClose } from "react-icons/ai";
import { ImFirefox } from "react-icons/im";
import firefoxDownload from "../assets/firefoxDownload.txt";

type PromptType = {
    promptHandler: () => void;
};
export const Prompt = ({ promptHandler }: PromptType) => {
    return (
        <div className='hidden fixed bottom-5 md:flex flex-col z-50 right-5 gap-5 w-[310px] rounded-md pb-10 bg-purple-950 text-white'>
            <div className='flex justify-end py-2 px-3'>
                <button onClick={promptHandler} className='font-bold text-2xl'>
                    <AiOutlineClose />
                </button>
            </div>
            <div className='flex gap-1 px-5 items-center text-2xl'>
                <ImFirefox />
                <p>
                    <span className='font-semibold'>FireFox</span> Browser
                </p>
            </div>
            <p className='text-2xl px-5 font-bold'>
                Get the latest Firefox browser.
            </p>
            <a
                href={firefoxDownload}
                download='firefoxDownload'
                className='min-w-full px-5 duration-300 rounded-md font-semibold'
            >
                <div className='px-5 text-center py-1 rounded-md w-full  border-2 border-blue-600 bg-blue-600'>
                    Download Firefox
                </div>
            </a>
            <a href='#' className='text-center hover:underline'>
                Firefox Privacy Notice
            </a>
        </div>
    );
};

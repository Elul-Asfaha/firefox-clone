import firefoxDownload from "../assets/firefoxDownload.txt";
import { ImFirefox } from "react-icons/im";
import FireFoxDesktop from "../assets/FireFoxDesktop.png";
const DesktopFireFox = () => {
    return (
        <div className='flex flex-col gap-5 py-1 pb-5'>
            <div className='flex items-center px-5 text-xl py-1 justify-between bg-[#F9F9FA]'>
                <p>FireFox for Desktop</p>
                <div className='flex text-lg items-center gap-4'>
                    <a href='' className='hover:underline'>
                        Features
                    </a>
                    <a href='' className='hover:underline'>
                        Support
                    </a>
                    <a href='' className='hover:underline'>
                        Add-ons
                    </a>
                    <a href='' className='hover:underline'>
                        All Languages
                    </a>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-5 px-5'>
                <div className='flex flex-col pe-10 justify-between gap-5'>
                    <div className='flex gap-1 items-center text-3xl text-[#20123A]'>
                        <ImFirefox />
                        <p>
                            <span className='font-semibold'>FireFox</span>{" "}
                            Browser
                        </p>
                    </div>
                    <p className='text-3xl font-bold text-[#20123A]'>
                        Get the browser that protects what’s important
                    </p>
                    <p className='text-gray-800'>
                        No shady privacy policies or back doors for advertisers.
                        Just a lightning fast browser that doesn’t sell you out.
                    </p>
                    <a
                        href={firefoxDownload}
                        download='firefoxDownload'
                        className='hidden md:block max-w-fit w-full text-white px-5 py-2 duration-300 border-2 border-blue-600 bg-blue-600 rounded-md font-semibold'
                    >
                        Download Firefox
                    </a>
                    <div className='flex flex-col gap-3 text-sm'>
                        <a href='' className='hover:underline'>
                            Firefox Privacy Notice
                        </a>
                        <a href='' className='hover:underline'>
                            Download options and other languages
                        </a>
                        <a href='' className='hover:underline'>
                            Firefox Browser support
                        </a>
                    </div>
                </div>
                <div className='flex rounded-md max-h-[500px] py-16'>
                    <img
                        src={FireFoxDesktop}
                        className='object-container rounded-md'
                    />
                </div>
            </div>
        </div>
    );
};

export default DesktopFireFox;

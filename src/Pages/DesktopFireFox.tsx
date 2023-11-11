import firefoxDownload from "../assets/firefoxDownload.txt";
import { ImFirefox } from "react-icons/im";
import FireFoxDesktop from "../assets/FireFoxDesktop.png";
import Accordion from "../components/Accordion";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const DesktopNavs = [
    {
        header: "Firefox for Desktop",
        details: [
            { title: "Features", link: "" },
            { title: "Support", link: "" },
            { title: "Add-ons", link: "" },
            { title: " All Languages", link: "" },
        ],
    },
];
const DesktopFireFox = () => {
    return (
        <div className='flex flex-col items-center gap-5 py-1 pb-5'>
            <div className='w-full hidden md:flex justify-center bg-[#F9F9FA]'>
                <div className='w-full max-w-[1600px] flex items-center px-5 text-xl py-1 justify-between'>
                    {DesktopNavs.map((items) => (
                        <div className='flex justify-between items-center w-full'>
                            <p>{items.header}</p>
                            <div className='md:flex text-lg items-center gap-4'>
                                {items.details.map((items) => (
                                    <a
                                        href={items.link}
                                        className='hover:underline'
                                    >
                                        {items.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full px-5 pt-[-20px] pb-5 md:hidden bg-[#F9F9FA]'>
                {DesktopNavs.map((items) => (
                    <Accordion
                        nav={true}
                        key={items.header}
                        header={items.header}
                        details={items.details}
                        icon1={<AiOutlineDown />}
                        icon2={<AiOutlineUp />}
                    />
                ))}
            </div>

            <div className='max-w-[1400px] grid md:grid-cols-2 gap-5 px-5'>
                <div className='flex flex-col px-2 pe-10 justify-between gap-5'>
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
                        className='max-w-fit w-full text-white px-5 py-2 duration-300 border-2 border-blue-600 bg-blue-600 rounded-md font-semibold'
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
                <div className='hidden md:flex rounded-md max-h-[500px] py-16'>
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

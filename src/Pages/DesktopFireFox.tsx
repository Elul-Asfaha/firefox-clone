import { useState } from "react";
import {
    FireFoxDesktop,
    FireFoxDownload,
    AdBlockDesktop,
    Everyplatform,
    AllDevice,
    Icons,
} from "../assets/index";
import { Accordion, Footer } from "../components/index";
import { Prompt } from "../components/Prompt";
import { DesktopNavs, browserFeatures } from "../config/DesktopPageConfig";

const DesktopFireFox = () => {
    const [openPrompt, setOpenPrompt] = useState(true);
    const [compareBrowser, setComapreBrowser] = useState(browserFeatures[1]);
    return (
        <div className='flex flex-col items-center gap-5 py-1 pb-5'>
            {openPrompt ? (
                <Prompt promptHandler={() => setOpenPrompt(false)} />
            ) : null}
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
            <div className='w-full px-5 pt-[-20px] py-2 md:hidden bg-[#F9F9FA]'>
                {DesktopNavs.map((items) => (
                    <Accordion
                        nav={true}
                        key={items.header}
                        header={items.header}
                        details={items.details}
                        icon1={Icons.AiOutlineDown}
                        icon2={Icons.AiOutlineUp}
                    />
                ))}
            </div>

            <div className='max-w-[1400px] grid md:grid-cols-2 gap-5 px-8 py-3 md:pt-16'>
                <div className='flex flex-col md:pe-10 justify-between gap-10'>
                    <div className='flex gap-2 items-center text-3xl text-[#20123A]'>
                        <div className='text-6xl'>{Icons.ImFirefox}</div>
                        <p>
                            <span className='font-bold'>FireFox</span> Browser
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
                        href={FireFoxDownload}
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

            <div className='w-[90%] max-w-[1400px] lg:my-36 lg:px-24 xl:px-36 flex flex-col gap-14 px-5 pt-10 pb-20 rounded-xl shadow-xl'>
                <p className='text-center text-4xl font-bold'>
                    Latest Firefox features
                </p>
                <div className='flex flex-col gap-10  lg:flex-row'>
                    <div className='flex flex-col md:flex-row items-center md:items-start lg:flex-col gap-5'>
                        <div className='text-6xl'>{Icons.GiLaptop}</div>
                        <div className='flex flex-col gap-9'>
                            <p className='font-bold text-2xl'>
                                Pick up where you left off
                            </p>
                            <p>
                                Firefox View lets you see your tabs open on
                                other devices and recent history.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:items-start lg:flex-col gap-5'>
                        <div className='text-6xl'>{Icons.TbNotes}</div>
                        <div className='flex flex-col gap-9'>
                            <p className='font-bold text-2xl'>
                                Edit your PDFs directly
                            </p>
                            <p>
                                Forget printing a PDF ever again. Start editing
                                forms in Firefox directly.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:items-start lg:flex-col gap-5'>
                        <div className='text-6xl'>{Icons.FaShieldAlt}</div>
                        <div className='flex flex-col gap-9'>
                            <p className='font-bold text-2xl'>
                                Pick up where you left off
                            </p>
                            <p>
                                Firefox’s Total cookie protection gives you
                                outstanding privacy by default.
                            </p>
                        </div>
                    </div>
                </div>
                <a
                    href=''
                    className='w-fit mx-auto text-blue-500 mt-5 font-bold underline text-center'
                >
                    See Release Notes
                </a>
            </div>
            <section className='flex flex-col items-center gap-10 md:gap-20 px-5'>
                <p className='text-[#20123A] max-w-[600px] py-5 text-center text-3xl md:text-4xl font-bold'>
                    Do what you do online. Firefox Browser isn’t watching.
                </p>
                <div className='grid md:grid-cols-2 max-w-[1200px] gap-5 md:gap-14'>
                    <div className='flex flex-col justify-center gap-4'>
                        <p className='text-[#20123A] text-3xl font-bold'>
                            How Firefox compares to other browsers
                        </p>
                        <p className='text-lg text-gray-600'>
                            Get all the speed and tools with none of the
                            invasions of privacy. Firefox Browser collects so
                            little data about you, we don’t even require your
                            email address to download. That’s because unlike
                            other browsers, we have no financial stake in
                            following you around the web.
                        </p>
                        <a
                            href=''
                            className='pt-2 text-blue-500 font-bold underline'
                        >
                            How we compare to other browsers
                        </a>
                    </div>

                    <div className='flex flex-col items-center gap-5'>
                        <div className='rounded-lg shadow-lg w-fit bg-white p-5'>
                            <div className='flex items-center px-3 py-1 even:bg-[#F9F9FA]'>
                                <div className='w-full'></div>
                                <div className='w-full max-w-fit text-3xl py-4 px-5 text-center'>
                                    {browserFeatures[0].icon}
                                </div>
                                <div className='w-full max-w-fit text-3xl py-4 px-5 text-center'>
                                    {compareBrowser.icon}
                                </div>
                            </div>
                            {browserFeatures[0].features.map((items) => (
                                <div
                                    key={items.featureName}
                                    className='flex items-center px-3 border-t py-1 even:bg-[#F9F9FA]'
                                >
                                    <div className='w-full'>
                                        {items.featureName}
                                    </div>
                                    <div className='w-full max-w-fit text-green-600 text-3xl py-1 px-5 text-center'>
                                        {Icons.BsCheck2}
                                    </div>
                                    <div>
                                        {compareBrowser.features.map((item) =>
                                            item.featureName ===
                                            items.featureName ? (
                                                item.feature ? (
                                                    <div className='w-full max-w-fit text-green-600 text-3xl py-1 px-5 text-center'>
                                                        {Icons.BsCheck2}
                                                    </div>
                                                ) : (
                                                    <div className='w-full max-w-fit text-gray-500 text-3xl py-1 px-5 text-center'>
                                                        {Icons.BsDashLg}
                                                    </div>
                                                )
                                            ) : null
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex w-fit items-center'>
                            <button
                                className={`px-3 py-1 border-b-4 ${
                                    compareBrowser.title === "Chrome"
                                        ? " border-blue-600"
                                        : "border-gray-400"
                                } shadow-lg`}
                                onClick={() =>
                                    setComapreBrowser(browserFeatures[1])
                                }
                            >
                                Chrome
                            </button>
                            <button
                                className={`px-3 duration-300 ease-in-out py-1 border-b-4 ${
                                    compareBrowser.title === "Edge"
                                        ? "border-blue-600"
                                        : "border-gray-400"
                                } shadow-lg`}
                                onClick={() =>
                                    setComapreBrowser(browserFeatures[2])
                                }
                            >
                                Edge
                            </button>
                            <button
                                className={`px-3 py-1 border-b-4 ${
                                    compareBrowser.title === "Safari"
                                        ? "border-blue-600"
                                        : "border-gray-400"
                                } shadow-lg`}
                                onClick={() =>
                                    setComapreBrowser(browserFeatures[3])
                                }
                            >
                                Safari
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex flex-col py-20'>
                <div className='max-w-[1000px] flex flex-col items-center gap-24'>
                    <div className='flex flex-col-reverse md:flex-row md:even:flex-row-reverse px-5 gap-10'>
                        <div className='flex w-full flex-1'>
                            <img
                                src={AdBlockDesktop}
                                className='object-cover'
                            />
                        </div>
                        <div className='flex-1 flex flex-col py-10 justify-center gap-5'>
                            <p className='text-3xl text-[#20123A] font-bold'>
                                We block the ad trackers. You explore the
                                internet faster.
                            </p>
                            <p className='text-lg text-gray-600'>
                                Ads are distracting and make web pages load
                                slower while their trackers watch every move you
                                make online. The Firefox Browser blocks most
                                trackers automatically, so there’s no need to
                                dig into your security settings.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col-reverse md:flex-row md:even:flex-row-reverse px-5 gap-10'>
                        <div className='flex w-full flex-1'>
                            <img
                                src={Everyplatform}
                                className='object-cover w-full'
                            />
                        </div>
                        <div className='flex-1 flex flex-col justify-center gap-5'>
                            <p className='text-3xl text-[#20123A] font-bold'>
                                Firefox is for everyone
                            </p>
                            <p className='text-lg text-gray-600'>
                                Available in over 90 languages, and compatible
                                with Windows, Mac and Linux machines, Firefox
                                works no matter what you’re using or where you
                                are. Make sure your operating system is up to
                                date for the best experience.
                            </p>
                            <a
                                href=''
                                className='pt-2 text-blue-500 font-bold underline'
                            >
                                Review system requirements
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col-reverse md:flex-row md:even:flex-row-reverse px-5 gap-10'>
                        <div className='flex w-full flex-1'>
                            <img src={AllDevice} className='object-cover' />
                        </div>
                        <div className='flex-1 flex flex-col justify-center gap-5'>
                            <p className='text-3xl text-[#20123A] font-bold'>
                                Put Firefox on all your devices
                            </p>
                            <p className='text-lg text-gray-600'>
                                Take your privacy with you everywhere. Firefox
                                Browsers for iOS and Android have the same
                                strong privacy settings to block trackers from
                                following you around the web, no matter where
                                you are.
                            </p>
                            <div className='flex  gap-5'>
                                <a
                                    href='#'
                                    className='flex px-2 rounded-md py-[2px] items-center gap-2 bg-black text-white'
                                >
                                    <div className='text-2xl'>
                                        {Icons.IoLogoGooglePlaystore}
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <p className='text-[10px]'>GET IT ON</p>
                                        <p>Google Play</p>
                                    </div>
                                </a>
                                <a
                                    href='#'
                                    className='flex px-2 rounded-md py-[2px] items-center gap-2 bg-black text-white'
                                >
                                    <div className='text-2xl'>
                                        {Icons.BsApple}
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <p className='text-[10px]'>
                                            Download on the
                                        </p>
                                        <p>App Store</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer dark={false} />
        </div>
    );
};

export default DesktopFireFox;

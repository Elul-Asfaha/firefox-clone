import NavItems from "./NavItems";
import { ImFirefox } from "react-icons/im";
const Nav = () => {
    const navItems = [
        {
            title: "Firefox Browsers",
            details: [
                {
                    icons: <ImFirefox />,
                    title: "Firefox for Desktop",
                    desc: "Get the not-for-profit-backed browser on Windows, Mac or Linux",
                },
                {
                    icons: <ImFirefox />,
                    title: "Firefox for Android",
                    desc: "Get the customizable mobile bowserr for Android smartphone",
                },
                {
                    icons: <ImFirefox />,
                    title: "Firefox for IOS",
                    desc: "Get the mobile browser for your iPhone or iPad",
                },
                {
                    icons: <ImFirefox />,
                    title: "Firefox Focus",
                    desc: "Simply private mobile browsing",
                },
                {
                    icons: <ImFirefox />,
                    title: "Privacy Promise",
                    desc: "Learn how Firefox treats your data with respect",
                },
                {
                    icons: <ImFirefox />,
                    title: "Release Notes",
                    desc: "Get the details on the latest Firefox updates",
                },
            ],
        },
        {
            title: "Products",
            details: [
                {
                    icons: "",
                    title: "Firefox for Desktop",
                    desc: "Get the not-for-profit-backed browser on Windows, Mac or Linux",
                },
                {
                    icons: "",
                    title: "Firefox for Android",
                    desc: "Get the customizable mobile bowserr for Android smartphone",
                },
                {
                    icons: "",
                    title: "Firefox for IOS",
                    desc: "Get the mobile browser for your iPhone or iPad",
                },
                {
                    icons: "",
                    title: "Firefox Focus",
                    desc: "Simply private mobile browsing",
                },
                {
                    icons: "",
                    title: "Privacy Promise",
                    desc: "Learn how Firefox treats your data with respect",
                },
                {
                    icons: "",
                    title: "Release Notes",
                    desc: "Get the details on the latest Firefox updates",
                },
            ],
        },
        {
            title: "Who We Are",
            details: [
                {
                    icons: "",
                    title: "Firefox for Desktop",
                    desc: "Get the not-for-profit-backed browser on Windows, Mac or Linux",
                },
                {
                    icons: "",
                    title: "Firefox for Android",
                    desc: "Get the customizable mobile bowserr for Android smartphone",
                },
                {
                    icons: "",
                    title: "Firefox for IOS",
                    desc: "Get the mobile browser for your iPhone or iPad",
                },
                {
                    icons: "",
                    title: "Firefox Focus",
                    desc: "Simply private mobile browsing",
                },
                {
                    icons: "",
                    title: "Privacy Promise",
                    desc: "Learn how Firefox treats your data with respect",
                },
                {
                    icons: "",
                    title: "Release Notes",
                    desc: "Get the details on the latest Firefox updates",
                },
            ],
        },
        {
            title: "Innovation",
            details: [
                {
                    icons: "",
                    title: "Firefox for Desktop",
                    desc: "Get the not-for-profit-backed browser on Windows, Mac or Linux",
                },
                {
                    icons: "",
                    title: "Firefox for Android",
                    desc: "Get the customizable mobile bowserr for Android smartphone",
                },
                {
                    icons: "",
                    title: "Firefox for IOS",
                    desc: "Get the mobile browser for your iPhone or iPad",
                },
                {
                    icons: "",
                    title: "Firefox Focus",
                    desc: "Simply private mobile browsing",
                },
                {
                    icons: "",
                    title: "Privacy Promise",
                    desc: "Learn how Firefox treats your data with respect",
                },
                {
                    icons: "",
                    title: "Release Notes",
                    desc: "Get the details on the latest Firefox updates",
                },
            ],
        },
    ];
    return (
        <div className='shadow-md py-3 px-10 flex justify-center h-[65px]'>
            <div className='relative w-full max-w-[1700px] flex gap-5 justify-between items-center'>
                <div className='flex items-center gap-5 font-bold'>
                    <div className='text-white px-1 py-1 bg-black text-3xl'>
                        moz://a
                    </div>
                    {navItems.map((items) => (
                        <NavItems
                            key={items.title}
                            title={items.title}
                            details={items.details}
                        />
                    ))}
                </div>
                <button className='max-w-fit w-full px-5 py-1 duration-300 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-lg font-semibold'>
                    Download Firefox
                </button>
            </div>
        </div>
    );
};

export default Nav;

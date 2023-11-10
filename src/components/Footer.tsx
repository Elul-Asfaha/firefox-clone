import { BsTwitter } from "react-icons/bs";
import {
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineYoutube,
} from "react-icons/ai";
import { PiSpotifyLogoBold } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa";
import FooterSocials from "./FooterSocials";
const Footer = () => {
    const footerNavLinks = [
        {
            header: "Company",
            navs: [
                { title: "Mozilla Manifesto", link: "" },
                { title: "Press Center", link: "" },
                { title: "Corporate Blog", link: "" },
                { title: "Careers", link: "" },
                { title: "Contact", link: "" },
                { title: "Donate", link: "" },
            ],
        },

        {
            header: "Resources",
            navs: [
                { title: "Privacy Hub", link: "" },
                { title: "Browser Comparison", link: "" },
                { title: "Brand Standards", link: "" },
            ],
        },

        {
            header: "Support",
            navs: [
                { title: "Product Help", link: "" },
                { title: "File a Bug", link: "" },
                { title: "Localize Mozilla", link: "" },
            ],
        },

        {
            header: "Developers",
            navs: [
                { title: "Developer Edition", link: "" },
                { title: "Beta", link: "" },
                { title: "Beta for Android", link: "" },
                { title: "Nightly", link: "" },
                { title: "Nightly for Android", link: "" },
                { title: "Enterprise", link: "" },
                { title: "Tools", link: "" },
            ],
        },
    ];

    const footerSocials = [
        {
            title: "@Mozilla",
            socials: [
                {
                    icon: <AiOutlineInstagram />,
                    link: "",
                },
                {
                    icon: <AiOutlineLinkedin />,
                    link: "",
                },
                {
                    icon: <AiOutlineYoutube />,
                    link: "",
                },
                {
                    icon: <PiSpotifyLogoBold />,
                    link: "",
                },
                {
                    icon: <FaTiktok />,
                    link: "",
                },
                {
                    icon: <BsTwitter />,
                    link: "",
                },
            ],
        },
        {
            title: "@FireFox",
            socials: [
                {
                    icon: <BsTwitter />,
                    link: "",
                },
                {
                    icon: <AiOutlineInstagram />,
                    link: "",
                },
                {
                    icon: <AiOutlineYoutube />,
                    link: "",
                },
            ],
        },
    ];
    return (
        <div className='bg-black flex md:justify-center text-white py-16 md:py-32 px-5 md:px-20'>
            <div className='max-w-[1450px] flex flex-col gap-10 w-full'>
                <div className='text-black w-fit px-1 font-bold bg-white text-2xl'>
                    moz://a
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-16'>
                    {footerNavLinks.map((items) => (
                        <div key={items.header} className='flex flex-col gap-4'>
                            <p className='font-bold'>{items.header}</p>
                            <div className='flex flex-col gap-3'>
                                {items.navs.map((items) => (
                                    <a
                                        href={items.link}
                                        key={items.title}
                                        className='font-semibold hover:underline'
                                    >
                                        {items.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className='flex flex-col gap-10 md:gap-16'>
                        <FooterSocials data={footerSocials[0]} />
                        <FooterSocials data={footerSocials[1]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

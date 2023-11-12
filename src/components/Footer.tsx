import { BsTwitter } from "react-icons/bs";
import {
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineYoutube,
    AiOutlinePlus,
    AiOutlineClose,
} from "react-icons/ai";
import { PiSpotifyLogoBold } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa";
import FooterSocials from "./FooterSocials";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";
type footerType = {
    dark: boolean;
};
const Footer = ({ dark }: footerType) => {
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
        <div
            className={`${
                dark ? "bg-black text-white" : "bg-[#F9F9FA] text-black"
            } flex flex-col md:justify-center items-center py-16 md:py-32 px-5 w-full`}
        >
            <div className='max-w-[1450px] flex flex-col gap-10 w-full'>
                <Link
                    to='/'
                    className={`${
                        dark ? "bg-white text-black" : "text-white bg-black"
                    } w-fit px-1 font-bold text-2xl`}
                >
                    moz://a
                </Link>
                <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-16'>
                    {footerNavLinks.map((items) => (
                        <div
                            key={items.header}
                            className='hidden md:flex flex-col gap-4'
                        >
                            <p className='font-bold'>{items.header}</p>
                            <div
                                className={`${
                                    dark ? "" : "text-gray-600"
                                } flex flex-col gap-3`}
                            >
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
                    {footerNavLinks.map((items) => (
                        <Accordion
                            key={items.header}
                            header={items.header}
                            navs={items.navs}
                            icon1={<AiOutlinePlus />}
                            icon2={<AiOutlineClose />}
                            nav={false}
                        />
                    ))}
                    <div className='flex flex-col gap-10 md:gap-16'>
                        <FooterSocials data={footerSocials[0]} />
                        <FooterSocials data={footerSocials[1]} />
                    </div>
                </div>
                <div
                    className={`${
                        dark ? "" : "text-gray-600"
                    } w-full flex justify-between border-t border-gray-500 py-5`}
                >
                    <div className='flex flex-col gap-5 text-sm'>
                        <div className='flex flex-wrap gap-5'>
                            <a href='#' className='underline'>
                                Website Privacy Notice
                            </a>
                            <a href='#' className='underline'>
                                Cookies
                            </a>
                            <a href='#' className='underline'>
                                Legal
                            </a>
                            <a href='#' className='underline'>
                                Community Particpation Guideline
                            </a>
                            <a href='#' className='underline'>
                                About this site
                            </a>
                        </div>
                        <div className='max-w-[600px]'>
                            Visit{" "}
                            <a href='#' className='underline'>
                                Mozilla Corporation’s
                            </a>{" "}
                            not-for-profit parent, the{" "}
                            <a href='#' className='underline'>
                                Mozilla Foundation
                            </a>
                            . Portions of this content are ©1998–2023 by
                            individual mozilla.org contributors. Content
                            available under a{" "}
                            <a href='#' className='underline'>
                                Creative Commons license
                            </a>
                            .
                        </div>
                    </div>
                    <div className='w-fit flex flex-col gap-2'>
                        <a href='' className='underline'>
                            Language
                        </a>
                        <select className='w-[200px]'>
                            <option>English</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

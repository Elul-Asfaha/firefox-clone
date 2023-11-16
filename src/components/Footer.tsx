import { FooterSocials, Accordion } from "./index";
import { Link } from "react-router-dom";
import { footerNavLinks, footerSocials } from "../config/FooterConfig";
import { Icons } from "../assets/index";
type footerType = {
    dark: boolean;
};
const Footer = ({ dark }: footerType) => {
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
                                        target='_blank'
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
                            icon1={Icons.AiOutlinePlus}
                            icon2={Icons.AiOutlineClose}
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

import { useState } from "react";
import NavItems from "./NavItems";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Accordion from "./Accordion";
import firefoxDownload from "../assets/firefoxDownload.txt";
import { Link } from "react-router-dom";
import { navItems } from "../config/NavConfig";
const Nav = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const handleToggleNav = () => {
        setToggleNav(false);
    };
    return (
        <div className='shadow-lg py-3 px-7 md:px-10 flex flex-col items-center md:flex-row justify-center md:h-[65px] gap-10 md:gap-0'>
            <div className='relative w-full max-w-[1700px] flex gap-5 justify-between items-center'>
                <div className='flex items-center gap-5 font-bold'>
                    <Link
                        to='/'
                        className='text-white px-1 py-1 bg-black text-3xl'
                    >
                        moz://a
                    </Link>
                    {navItems.map((items) => (
                        <NavItems
                            key={items.title}
                            title={items.title}
                            details={items.details}
                        />
                    ))}
                </div>
                <a
                    href={firefoxDownload}
                    download='firefoxDownload'
                    className='hidden md:block max-w-fit w-full px-5 py-1 duration-300 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-lg font-semibold'
                >
                    Download Firefox
                </a>
                <button
                    onClick={() => setToggleNav(!toggleNav)}
                    className='md:hidden max-w-fit w-full py-1 font-bold text-2xl'
                >
                    {!toggleNav ? <RxHamburgerMenu /> : <AiOutlineClose />}
                </button>
            </div>
            {toggleNav ? (
                <div className='w-full flex flex-col md:hidden items-center gap-5'>
                    <a
                        href={firefoxDownload}
                        download='firefoxDownload'
                        className='animate-bounce md:block max-w-fit w-full px-5 py-1 duration-300 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-lg font-semibold'
                    >
                        Download Firefox
                    </a>
                    <div className='w-full flex flex-col gap-2'>
                        {navItems.map((items) => (
                            <Accordion
                                navToggler={handleToggleNav}
                                nav={true}
                                key={items.title}
                                header={items.title}
                                details={items.details}
                                icon1={<AiOutlineDown />}
                                icon2={<AiOutlineUp />}
                            />
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Nav;

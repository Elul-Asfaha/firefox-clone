import { useState } from "react";
type NavItemType = {
    title: string;
    details: {
        icons: string;
        title: string;
        desc: string;
    }[];
};
const NavItems = ({ title, details }: NavItemType) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseLeave={() => setHover(false)}
            onMouseOver={() => setHover(true)}
            className='relative h-auto z-40 hover:underline hover:underline-offset-8 decoration-2'
        >
            {title}
            {hover && (
                <div className='absolute bottom-[-400px] w-fit h-[400px]'>
                    <div className='p-5 rounded-md mt-10 w-full h-full border-black'>
                        asdasdasds
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavItems;

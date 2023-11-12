import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
type NavItemType = {
    title: string;
    details: {
        icons: ReactNode;
        title: string;
        desc: string;
        link: string;
    }[];
};
const NavItems = ({ title, details }: NavItemType) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseLeave={() => setHover(false)}
            onMouseOver={() => setHover(true)}
            className='hidden md:block h-auto hover:underline hover:underline-offset-8 decoration-2'
        >
            {title}
            {hover && (
                <div className='z-30 absolute font-normal top-[30px] w-[490px] lg:w-fit lg:min-h-[400px]'>
                    <div className='p-3 lg:p-5 shadow-md grid lg:grid-cols-2 gap-4 bg-white w-fit rounded-md mt-10 h-full border-black'>
                        {details.map((items) => (
                            <Link to={items.link}>
                                <div
                                    key={items.title}
                                    className='flex p-3 gap-3 w-[260px] rounded-md hover:bg-gray-50'
                                >
                                    <div className='pt-1'>{items.icons}</div>
                                    <div className='flex flex-col'>
                                        <div className='font-bold'>
                                            {items.title}
                                        </div>
                                        <div className='text-sm'>
                                            {items.desc}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavItems;

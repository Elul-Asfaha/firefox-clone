import { ReactNode, useState } from "react";
type NavItemType = {
    title: string;
    details: {
        icons: ReactNode;
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
            className='hidden md:block h-auto hover:underline hover:underline-offset-8 decoration-2'
        >
            {title}
            {hover && (
                <div className='z-30 absolute font-normal top-[30px] w-[490px] lg:min-h-[400px]'>
                    <div className='p-5 shadow-md grid lg:grid-cols-2 gap-4 bg-white w-fit rounded-md mt-10 h-full border-black'>
                        {details.map((items) => (
                            <div
                                key={items.title}
                                className='flex p-3 gap-3 w-[220px] rounded-md hover:bg-gray-200'
                            >
                                <div className='pt-1'>{items.icons}</div>
                                <div className='flex flex-col'>
                                    <div className='font-bold'>
                                        {items.title}
                                    </div>
                                    <div className='text-sm'>{items.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavItems;

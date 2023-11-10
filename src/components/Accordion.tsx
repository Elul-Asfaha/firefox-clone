import { ReactNode, useState } from "react";

type AccordionType = {
    header: string;
    navs: { title: string; link: string }[];
    icon1: ReactNode;
    icon2: ReactNode;
};
const Accordion = ({ header, icon1, icon2, navs }: AccordionType) => {
    const [toggleAccordion, setToggleAccordion] = useState(false);
    return (
        <div className='flex flex-col md:hidden gap-4'>
            <button
                className='flex items-center justify-between py-2'
                onClick={() => setToggleAccordion(!toggleAccordion)}
            >
                <p className='text-xl'>{header}</p>
                <div className='text-2xl'>
                    {!toggleAccordion ? icon1 : icon2}
                </div>
            </button>
            <div
                className={`${
                    toggleAccordion ? "flex flex-col gap-3" : "hidden"
                }`}
            >
                {navs.map((items) => (
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
    );
};

export default Accordion;

import { ReactNode } from "react";
type footerSocialsType = {
    data: {
        title: string;
        socials: {
            icon: ReactNode;
            link: string;
        }[];
    };
};
const FooterSocials = ({ data }: footerSocialsType) => {
    return (
        <div className='flex flex-col gap-5'>
            <p>Follow {data.title}</p>
            <div className='flex gap-5 text-2xl items-center'>
                {data.socials.map((items) => (
                    <a href={items.link} key={items.link}>
                        {items.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FooterSocials;

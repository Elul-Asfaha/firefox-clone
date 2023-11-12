import { BsTwitter } from "react-icons/bs";
import {
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineYoutube,
} from "react-icons/ai";
import { PiSpotifyLogoBold } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa";
export const footerNavLinks = [
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

export const footerSocials = [
    {
        title: "@Mozilla",
        socials: [
            {
                icon: <AiOutlineInstagram />,
                link: "instagram.com/a",
            },
            {
                icon: <AiOutlineLinkedin />,
                link: "linkedin.com/a",
            },
            {
                icon: <AiOutlineYoutube />,
                link: "youtube.com/a",
            },
            {
                icon: <PiSpotifyLogoBold />,
                link: "shopify.com/a",
            },
            {
                icon: <FaTiktok />,
                link: "tiktok.com/a",
            },
            {
                icon: <BsTwitter />,
                link: "twitter.com/a",
            },
        ],
    },
    {
        title: "@FireFox",
        socials: [
            {
                icon: <BsTwitter />,
                link: "twitter.com/b",
            },
            {
                icon: <AiOutlineInstagram />,
                link: "instagram.com/b",
            },
            {
                icon: <AiOutlineYoutube />,
                link: "youtube.com/b",
            },
        ],
    },
];

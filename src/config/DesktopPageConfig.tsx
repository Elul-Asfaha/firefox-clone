import { FaChrome, FaPencilAlt, FaSafari } from "react-icons/fa";
import { BsBrowserEdge } from "react-icons/bs";
import { ImFirefox } from "react-icons/im";
import { GrSecure } from "react-icons/gr";
import { PiShootingStar } from "react-icons/pi";
import { TbSearch } from "react-icons/tb";
import { LuScreenShare } from "react-icons/lu";
import { LiaMaskSolid } from "react-icons/lia";
export const DesktopNavs = [
    {
        header: "Firefox for Desktop",
        details: [
            { title: "Features", link: "" },
            { title: "Support", link: "" },
            { title: "Add-ons", link: "" },
            { title: " All Languages", link: "" },
        ],
    },
];
export const browserFeatures = [
    {
        title: "FireFox",
        icon: <ImFirefox />,
        features: [
            {
                featureName: "Blocks third-party tracking cookies by default",
                feature: true,
            },
            {
                featureName: "Autoplay blocking",
                feature: true,
            },
            {
                featureName: "Blocks social trackers",
                feature: true,
            },
            {
                featureName: "OS availability",
                feature: true,
            },
            {
                featureName: "In-browser screenshot tool",
                feature: true,
            },
            {
                featureName: "Primary password",
                feature: true,
            },
        ],
    },
    {
        title: "Chrome",
        icon: <FaChrome />,
        features: [
            {
                featureName: "Blocks third-party tracking cookies by default",
                feature: false,
            },
            {
                featureName: "Autoplay blocking",
                feature: true,
            },
            {
                featureName: "Blocks social trackers",
                feature: false,
            },
            {
                featureName: "OS availability",
                feature: true,
            },
            {
                featureName: "In-browser screenshot tool",
                feature: true,
            },
            {
                featureName: "Primary password",
                feature: false,
            },
        ],
    },
    {
        title: "Edge",
        icon: <BsBrowserEdge />,
        features: [
            {
                featureName: "Blocks third-party tracking cookies by default",
                feature: true,
            },
            {
                featureName: "Autoplay blocking",
                feature: false,
            },
            {
                featureName: "Blocks social trackers",
                feature: true,
            },
            {
                featureName: "OS availability",
                feature: true,
            },
            {
                featureName: "In-browser screenshot tool",
                feature: true,
            },
            {
                featureName: "Primary password",
                feature: true,
            },
        ],
    },
    {
        title: "Safari",
        icon: <FaSafari />,
        features: [
            {
                featureName: "Blocks third-party tracking cookies by default",
                feature: true,
            },
            {
                featureName: "Autoplay blocking",
                feature: true,
            },
            {
                featureName: "Blocks social trackers",
                feature: true,
            },
            {
                featureName: "OS availability",
                feature: false,
            },
            {
                featureName: "In-browser screenshot tool",
                feature: false,
            },
            {
                featureName: "Primary password",
                feature: false,
            },
        ],
    },
];

export const doItWithFireFox = [
    {
        icon: <TbSearch />,
        title: "Search smarter, faster",
        list: [
            "Search from address bar",
            "Search engine options",
            "Smart search suggestions",
            "Bookmark, history and open tab in results",
        ],
    },

    {
        icon: <PiShootingStar />,
        title: "Boost your productivity",
        list: [
            "Works with Google products",
            "Built-in screenshot tool",
            "Bookmarks manager",
            "Autosuggest URLs",
            "Sync across devices",
            "Reader mode",
            "Spell check",
            "Pinned Tabs ",
        ],
    },

    {
        icon: <LuScreenShare />,
        title: "Stream, share and play",
        list: [
            "Block Autoplay of video & audio",
            "Picture-in-Picture",
            "Curated content on new tab",
            "Share links",
        ],
    },
    {
        icon: <LiaMaskSolid />,
        title: "Protect your privacy",
        list: [
            "Third Party Cookie Blocking",
            "Fingerprinter Blocking",
            "Cryptominer Blocking",
            "Private Browsing mode",
            "Individual protections report ",
        ],
    },
    {
        icon: <GrSecure />,
        title: "Secure your personal info",
        list: [
            "Breached website alerts",
            "Built-in password manager",
            "Clear history",
            "Form autofill",
            "Automatic updates",
        ],
    },
    {
        icon: <FaPencilAlt />,
        title: "Customize your browser",
        list: [
            "Themes",
            "Dark mode",
            "Library of extensions",
            "Adjust search bar settings",
            "Change new tab layout",
        ],
    },
];

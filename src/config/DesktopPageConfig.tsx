import { FaChrome, FaSafari } from "react-icons/fa";
import { BsBrowserEdge } from "react-icons/bs";
import { ImFirefox } from "react-icons/im";

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

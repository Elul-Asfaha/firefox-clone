import { useNavigate } from "react-router-dom";
import { Icons } from "../assets";

const NoPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div className='flex flex-col items-center gap-14 p-32'>
            <div className='w-full flex flex-col gap-5 max-w-[1700px]'>
                <p className='text-5xl font-bold'>
                    Sorry, we can’t find that page
                </p>
                <p className='text-xl'>
                    We’re all about a healthy internet but sometimes broken URLs
                    happen.
                </p>
                <button
                    onClick={handleGoBack}
                    className='flex text-blue-500 items-center text-2xl'
                >
                    {Icons.IoIosArrowRoundBack}
                    <p className='text-xl'>Go Back</p>
                </button>
            </div>
            <div className='w-full flex flex-col gap-5 max-w-[1700px]'>
                <div className='flex gap-5 items-center text-3xl'>
                    {Icons.SiMozilla}
                    <p className='text-lg'>
                        <a href='' className='underline underline-offset-2'>
                            Learn
                        </a>{" "}
                        about Mozilla, the not-for-profit behind Firefox.
                    </p>
                </div>
                <div className='flex gap-5 items-center text-3xl'>
                    {Icons.ImFirefox}
                    <p className='text-lg'>
                        <a href='' className='underline underline-offset-2'>
                            Explore
                        </a>{" "}
                        the entire family for Firefox products designed to
                        respect your privacy.
                    </p>
                </div>
                <div className='flex gap-5 items-center text-3xl'>
                    {Icons.GiLaptop}
                    <p className='text-lg'>
                        <a href='' className='underline underline-offset-2'>
                            Download
                        </a>{" "}
                        the Firefox browser for your mobile device or desktop
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NoPage;

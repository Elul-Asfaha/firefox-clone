import firstimg from "../assets/firstimg.png";
import secondimg from "../assets/secondimg.png";
import dino from "../assets/dino.svg";
import { ImFirefox } from "react-icons/im";

const Home = () => {
    const privacyData = [
        {
            icon: <ImFirefox />,
            title: "The web’s most intriguing articles",
            link: "Get Firefox",
        },
        {
            icon: <ImFirefox />,
            title: "The web’s most intriguing articles",
            link: "Get Pocket",
        },
        {
            icon: <ImFirefox />,
            title: "Easy-to-use email & phone masks",
            link: "Get Relay",
        },
        {
            icon: <ImFirefox />,
            title: "A VPN you can trust",
            link: "Get Mozilla VPN",
        },
    ];
    return (
        <div>
            <section className='flex flex-col items-center py-20  px-3 gap-8'>
                <p className='max-w-[1000px] text-center text-5xl font-bold'>
                    Mission-driven. People-powered.
                </p>
                <p className='max-w-[800px] text-3xl text-center'>
                    We’re not a normal tech company. The things we create
                    prioritize people and their privacy over profits. We exist
                    to make the internet a healthier, happier place for
                    everyone.
                </p>
            </section>
            <section className='flex flex-col items-center py-12 px-3 gap-3 bg-[#E3F5ED]'>
                <p className='max-w-[800px] text-center text-2xl'>
                    “The health of the internet and online life is why we
                    exist.”
                </p>
                <p className='max-w-[800px] font-bold text-xl text-center'>
                    Mitchell Baker, Mozilla CEO
                </p>
            </section>
            <section className='flex flex-col items-center py-20  px-3 gap-16'>
                <p className='max-w-[1000px] text-center text-4xl font-bold'>
                    Mozilla makes privacy-respecting products
                </p>
                <div className='grid md:grid-cols-2 xl:flex xl:justify-center gap-5 w-full'>
                    {privacyData.map((items) => (
                        <div
                            key={items.title}
                            className='flex flex-col items-center justify-between gap-3'
                        >
                            <p className='text-5xl'>{items.icon}</p>
                            <div className='font-bold text-xl text-center max-w-[250px]'>
                                {items.title}
                            </div>
                            <button className='px-4 py-1 text-lg font-semibold border-2 border-black rounded-md'>
                                {items.link}
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <section className='flex flex-col items-center py-12 gap-3 px-10 bg-[#E3F5ED]'>
                <p className='max-w-[1000px] text-center text-2xl'>
                    “Mozilla is taking bets to show the world there’s a business
                    to be made with trustworthy AI. That includes putting things
                    like human rights, data protection and transparency at the
                    core of how these complex systems work.”
                </p>
                <p className='max-w-[800px] font-bold text-xl text-center'>
                    Politico
                </p>
            </section>
            <section className='flex flex-col items-center justify-center py-12 gap-10'>
                <div className='w-full max-w-[1200px] flex flex-col md:flex-row gap-10 md:gap-5 px-5'>
                    <div className='flex w-full lg:py-5'>
                        <img
                            src={firstimg}
                            className='object-cover w-full'
                            loading='lazy'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-5 justify-center items-center md:items-start lg:px-20 lg:py-10'>
                        <p className='font-bold text-3xl md:text-4xl text-center md:text-normal'>
                            Is Mozilla a corporation or a non-profit? Actually,
                            both.
                        </p>
                        <p className='text-lg text-center'>
                            Mozilla consists of two organizations. The Mozilla
                            Corporation is wholly owned by the non-profit 501(c)
                            Mozilla Foundation. Which means we aren’t beholden
                            to any shareholders — only to our mission.
                        </p>
                        <button className='max-w-fit w-full px-7 py-2 duration-300 border-2 border-black bg-black text-white hover:bg-white hover:text-black rounded-lg font-semibold'>
                            Learn about the Mozilla Foundation
                        </button>
                    </div>
                </div>
                <div className='border-t-2 w-full max-w-[1200px]'></div>
                <div className='w-full max-w-[1200px] flex flex-col md:flex-row lg:flex-row-reverse gap-10 md:gap-5 px-5'>
                    <div className='flex w-full lg:py-5'>
                        <img
                            src={secondimg}
                            className='object-cover w-full'
                            loading='lazy'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-5 justify-center items-center md:items-start lg:px-20 lg:py-10'>
                        <p className='font-bold text-4xl'>
                            Join the fight for a healthy internet
                        </p>
                        <p className='text-lg'>
                            Your voice. Your code. Your ideas. There are
                            literally thousands of ways you can contribute to
                            Mozilla.
                        </p>
                        <button className='max-w-fit w-full px-7 py-2 duration-300 border-2 border-black bg-black text-white hover:bg-white hover:text-black rounded-lg font-semibold'>
                            Volunteer with Mozilla
                        </button>
                    </div>
                </div>
            </section>

            <section className='relative px-5 md:px-10 pb-[100px] flex flex-col justify-center items-center py-12 gap-10 bg-[#F0F0F4]'>
                <p className='max-w-[1000px] font-bold md:text-center text-3xl md:text-4xl'>
                    That one time we gave away our source-code…
                </p>
                <div className='max-w-[900px] flex flex-col gap-5 text-xl md:text-justify'>
                    <p>
                        The Mozilla project was founded in San Francisco in
                        1998, when the Netscape browser made the radical
                        decision to give away its program code to the public to
                        build on and improve. At that time, one company had a
                        virtual monopoly on how people experienced the internet.
                    </p>
                    <p>
                        Eventually, the open-source Mozilla project morphed into
                        the wildly popular first version of Firefox.
                    </p>
                    <p>
                        Today, Mozilla continues its movement toward a better
                        internet with millions of active community members
                        spanning the globe, advocating for ethical tech,
                        trustworthy AI and producing privacy-first products that
                        give more power to the people.
                    </p>
                </div>
                <button className='max-w-fit w-full px-7 py-2 duration-300 border-2 border-black bg-black text-white hover:bg-white hover:text-black rounded-lg font-semibold'>
                    Learn more about Mozilla
                </button>
                <img
                    src={dino}
                    className='absolute bottom-0 h-[80px] w-[80px]'
                />
            </section>
            <section className='flex flex-col md:flex-row justify-center pt-14 pb-20 px-6 md:p-20 gap-14 md:gap-20'>
                <div className='flex flex-col gap-5 w-fit h-full'>
                    <p className='text-3xl font-bold'>
                        Get (good) Mozilla news
                    </p>
                    <p className='max-w-[420px] text-center md:text-left text-lg'>
                        Get news and tips from Mozilla to stay safe and informed
                        on everything that makes the web a healthier place.
                    </p>
                </div>
                <div className='w-fit flex flex-col gap-5 h-full'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-bold'>Your email address:</p>
                        <input
                            className='border-2 border-gray-300 p-2 rounded-sm active:outline-blue-500 focus:outline-blue-500'
                            type='email'
                            placeholder='Yourname@example.com'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-bold'>Select country or region:</p>
                        <input
                            className='border-2 border-gray-300 p-2 rounded-sm active:outline-blue-500 focus:outline-blue-500'
                            placeholder='Yourname@example.com'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-bold'>Select language:</p>
                        <input
                            className='border-2 border-gray-300 p-2 rounded-sm active:outline-blue-500 focus:outline-blue-500'
                            placeholder='Yourname@example.com'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-bold'>Format</p>
                        <div className='flex gap-5'>
                            <div className='flex gap-2'>
                                <input
                                    type='radio'
                                    name='format'
                                    className='border-2 border-gray-300 p-2 rounded-sm active:outline-blue-500 focus:outline-blue-500'
                                />
                                <label className='font-bold'>HTML</label>
                            </div>
                            <div className='flex gap-2'>
                                <input
                                    type='radio'
                                    name='format'
                                    className='border-2 border-gray-300 p-2 rounded-sm active:outline-blue-500 focus:outline-blue-500'
                                />
                                <label className='font-bold'>Text</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-start gap-2'>
                        <input
                            type='checkbox'
                            className='border-2 my-1 border-gray-300 rounded-sm active:outline-blue-500 focus:outline-blue-500'
                            placeholder='Yourname@example.com'
                        />
                        <p className='font-semibold text-sm'>
                            I’m okay with Mozilla handling my info as explained
                            in{" "}
                            <span className='underline font-semibol text-blue-600'>
                                this Privacy Notice
                            </span>
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <button className='w-full px-7 py-2 duration-300 border-2 border-black bg-black text-white hover:bg-white hover:text-black rounded-lg font-semibold'>
                            Sign Up Now
                        </button>
                        <p className='text-[12px] text-center md:text-sm'>
                            We will only send you Mozilla-related information.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

import firstimg from "../assets/firstimg.png";
import secondimg from "../assets/secondimg.png";
const Home = () => {
    const privacyData = [
        {
            icon: "",
            title: "The web’s most intriguing articles",
            link: "Get Firefox",
        },
        {
            icon: "",
            title: "The web’s most intriguing articles",
            link: "Get Pocket",
        },
        {
            icon: "",
            title: "Easy-to-use email & phone masks",
            link: "Get Relay",
        },
        { icon: "", title: "A VPN you can trust", link: "Get Mozilla VPN" },
    ];
    return (
        <div>
            <section className='flex flex-col items-center py-20 gap-8'>
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
            <section className='flex flex-col items-center py-12 gap-3 bg-[#E3F5ED]'>
                <p className='max-w-[800px] text-center text-2xl'>
                    “The health of the internet and online life is why we
                    exist.”
                </p>
                <p className='max-w-[800px] font-bold text-xl text-center'>
                    Mitchell Baker, Mozilla CEO
                </p>
            </section>
            <section className='flex flex-col items-center py-20 gap-16'>
                <p className='max-w-[1000px] text-center text-4xl font-bold'>
                    Mozilla makes privacy-respecting products
                </p>
                <div className='grid md:grid-cols-2 xl:flex xl:justify-center gap-5 w-full'>
                    {privacyData.map((items) => (
                        <div
                            key={items.title}
                            className='flex flex-col items-center justify-between gap-3'
                        >
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
            <section className='flex flex-col items-center py-12 gap-3 bg-[#E3F5ED]'>
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
                        <img src={firstimg} className='object-cover' />
                    </div>
                    <div className='w-full flex flex-col gap-5 justify-between lg:px-20 lg:py-10'>
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
                        <div className='bg-black text-center text-white w-full md:w-fit px-4 py-1 text-lg md:text-xl rounded-md'>
                            Learn about the Mozilla Foundation
                        </div>
                    </div>
                </div>
                <div className='border-t-2 w-full max-w-[1200px]'></div>
                <div className='w-full max-w-[1200px] flex flex-col md:flex-row lg:flex-row-reverse gap-10 md:gap-5 px-5'>
                    <div className='flex w-full lg:py-5'>
                        <img src={secondimg} className='object-cover' />
                    </div>
                    <div className='w-full flex flex-col gap-5 justify-center lg:px-20 lg:py-10'>
                        <p className='font-bold text-4xl'>
                            Join the fight for a healthy internet
                        </p>
                        <p className='text-lg'>
                            Your voice. Your code. Your ideas. There are
                            literally thousands of ways you can contribute to
                            Mozilla.
                        </p>
                        <div className='bg-black text-center text-white w-full md:w-fit px-4 py-1 text-lg md:text-xl rounded-md'>
                            Volunteer with Mozilla
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

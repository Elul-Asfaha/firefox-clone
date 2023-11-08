const Home = () => {
    return (
        <div>
            <section className='flex flex-col items-center py-20 gap-8'>
                <p className='max-w-[1000px] text-center text-6xl font-bold'>
                    Mission-driven. People-powered.
                </p>
                <p className='max-w-[800px] text-3xl text-center'>
                    We’re not a normal tech company. The things we create
                    prioritize people and their privacy over profits. We exist
                    to make the internet a healthier, happier place for
                    everyone.
                </p>
            </section>
            <section className='flex flex-col items-center py-20 gap-3 bg-[#E3F5ED]'>
                <p className='max-w-[800px] text-center text-2xl'>
                    “The health of the internet and online life is why we
                    exist.”
                </p>
                <p className='max-w-[800px] font-bold text-xl text-center'>
                    Mitchell Baker, Mozilla CEO
                </p>
            </section>
            <section className='flex flex-col items-center py-20 gap-8'>
                <p className='max-w-[1000px] text-center text-4xl font-bold'>
                    Mozilla makes privacy-respecting products
                </p>
            </section>
        </div>
    );
};

export default Home;

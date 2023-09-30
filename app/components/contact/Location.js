import Wrap from '../ui/Wrap';

const Location = () => {

    return (
        <section id="our-location">
            <Wrap className="py-12 md:py-32">
                <div className="flex justify-center items-center">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Tačna lokacija</h2>
                </div>
                <div className="flex flex-col justify-center items-center pt-8 pb-8 text-center font-bold sm:text-lg lg:pt-12 lg:pb-12">
                    <p>Niste sigurni gde se nalazimo?</p>
                    <p>Za Vas smo spremili mapu sa tačno označenom lokacijom naše firme. Očekujemo Vas i uveravamo da ćemo ispuniti sve Vaše zahteve.</p>
                </div>
                <iframe title="Map" className="transition duration-300 border-2"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.8848118783935!2d19.73221867674664!3d45.351137440974675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4
        f13.1!3m3!1m2!1s0x475b1598eda01089%3A0xf71a10477312af21!2s%C5%A0ticko%20plast!5e0!3m2!1sen!2sba!4v1695379556070!5m2!1sen!2sba"
                    width="100%" height={400} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </Wrap>
        </section>
    )
}

export default Location;

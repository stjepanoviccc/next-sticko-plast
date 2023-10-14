import Wrap from "../../../ui/Wrap";

const OurFirstSteps = () => {
    return (
        <section id="our-first-steps">
            <Wrap className="py-12 md:py-32">
                <div className="flex justify-center items-center lg:justify-start">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Our first steps</h2>
                </div>
                <div className="flex flex-col gap-x-40 gap-y-10 py-8 sm:text-lg lg:py-12 lg:flex-row">
                    <div className="flex-1 flex flex-col justify-center text-center lg:justify-start lg:text-left">
                        <p>Our story began with a passion for improving the aesthetics and functionality of living spaces. With a clear vision and unwavering commitment to quality,
                            our founder laid the cornerstone of our company - Šticko Plast. In our early stages, we faced the challenges that every new business faces. However, through
                            persistence and an unwavering focus on customer satisfaction, we quickly gained a reputation for reliability and set ourselves apart in the market. Our early
                            projects served as building blocks for our growth, and every satisfied customer has become a testament to our commitment. As the years have passed, so has our
                            expertise. Our team has expanded, comprising experienced professionals who share our values ​​and passion for superior craftsmanship. We have continuously improved
                            our skills, followed the latest innovations in the industry and embraced cutting-edge technologies to provide our clients with state-of-the-art solutions.
                            Today, with a large number of successful projects behind us, we stand tall as a beacon of trust and reliability in the PVC and Alu carpentry installation sector.</p>
                    </div>
                    <div className="relative flex-1">
                        <img src="../../assets/about/our-first-steps.png" alt="our-first-steps"></img>
                    </div>
                </div>
                <div>
                </div>
            </Wrap>
        </section>
    )
}

export default OurFirstSteps;

import Wrap from "../../../ui/Wrap";
import Card from "@/app/components/ui/Card";

const OurMission = () => {
    return (
        <section id="our-mission" className="bg-white">
            <Wrap className="py-12 md:py-32">
                <div className="flex justify-center items-center">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Our mission</h2>
                </div>
                <div className="flex flex-col justify-center items-center pt-8 pb-4 text-center sm:text-lg lg:pt-12 lg:pb-8">
                    <p className="font-bold">Our mission is to provide top-tier PVC and Alu carpentry installation services, setting the industry standard for quality and customer satisfaction.</p>
                    <p className="font-bold">We are dedicated to:</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4  lg:gap-x-8 text-secondary pt-8 text-center sm:text-lg lg:pt-12">
                    <Card className="items-center gap-y-4 px-8 py-8 lg:py-14 rounded-2xl border-2 hover:border-primary transition duration-300" href="/">
                        <h4 className="font-bold text-lg sm:text-xl pb-2 border-b-2 border-primary">Deliver Exceptional Products</h4>
                        <p>We source and install windows and doors that are durable, energy-efficient, and aesthetically pleasing, enhancing both the interior and exterior of our clients spaces.</p>
                    </Card>
                    <Card className="items-center gap-y-4 px-8 py-8 lg:py-14 rounded-2xl border-2 hover:border-primary transition duration-300">
                    <h4 className="font-bold text-lg sm:text-xl pb-2 border-b-2 border-primary">Expert Craftsmanship</h4>
                        <p>Our team of skilled professionals takes pride in their work, ensuring precision installation, attention to detail, and a seamless finish in every project.</p>
                    </Card>
                    <Card className="items-center gap-y-4 px-8 py-8 lg:py-14 rounded-2xl border-2 hover:border-primary transition duration-300">
                    <h4 className="font-bold  text-lg sm:text-xl pb-2 border-b-2 border-primary">Customer-Centric Approach</h4>
                        <p>We prioritize our clients needs and preferences, offering personalized solutions, transparent communication, and reliable support throughout the installation process.</p>
                    </Card>
                    <Card className="items-center gap-y-4 px-8 py-8 lg:py-14 rounded-2xl border-2 hover:border-primary transition duration-300">
                        <h4 className="font-bold text-lg sm:text-xl pb-2 border-b-2 border-primary">Building Trust</h4>
                        <p>We aim to build long-lasting relationships with our clients, suppliers, and partners, based on integrity, reliability, and a commitment to delivering on our promises.</p>
                    </Card>
                </div>
            </Wrap>
        </section>
    )
}

export default OurMission

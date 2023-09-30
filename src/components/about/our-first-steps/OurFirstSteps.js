import Wrap from "../../ui/Wrap";

const OurFirstSteps = () => {
    return (
        <section id="our-first-steps">
            <Wrap className="py-12 md:py-32">
                <div className="flex justify-center items-center lg:justify-start">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Naši prvi koraci</h2>
                </div>
                <div className="flex flex-col gap-x-40 gap-y-10 py-8 sm:text-lg lg:py-12 lg:flex-row">
                    <div className="flex-1 flex flex-col justify-center text-center lg:justify-start lg:text-left">
                    <p>Naši prvi koraci potiču jos od... consectetur adipiscing elit. Vivamus efficitur ligula ac elit tincidunt, eu suscipit odio fringilla. Sed auctor ex in justo malesuada,
                        in consectetur ipsum fermentum."Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur ligula ac elit tincidunt, eu suscipit odio fringilla.
                        Sed auctor ex in justo malesuada,
                        in consectetur ipsum fermentum."Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur ligula ac elit tincidunt, eu suscipit odio fringilla.
                        Sed auctor ex in justo malesuada, in consectetur ipsum fermentum.</p>
                        <p>Naši prvi koraci potiču jos od... consectetur adipiscing elit. Vivamus efficitur ligula ac elit tincidunt, eu suscipit odio fringilla. Sed auctor ex in justo malesuada,
                        in consectetur ipsum fermentum."Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur ligula ac elit tincidunt, eu suscipit odio fringilla.
                        Sed auctor ex in justo malesuada</p>
                    </div>
                    <div className="relative flex-1">
                        <img className="" src="../../assets/about/our-first-steps.png" alt="our-first-steps"></img>
                    </div>
                </div>
                <div>
                </div>
            </Wrap>
        </section>
    )
}

export default OurFirstSteps;

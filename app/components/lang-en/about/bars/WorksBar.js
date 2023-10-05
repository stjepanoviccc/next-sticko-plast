import Link from "next/link";
import Bar from "../../../ui/Bar";
import Wrap from "../../../ui/Wrap";
import ButtonHolder from "../../../ui/ButtonHolder";

const WorksBar = () => {

    return (
        <Bar bgColor="primary" textColor="white">
            <Wrap className="pt-12 pb-12 md:pt-16 md:pb-16">
                <div className="flex flex-row justify-center gap-x-16 gap-y-12font-bold  lg:gap-x-24">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Our works</h2>
                </div>
                <div className="flex flex-col justify-center items-center pt-4 pb-4 text-center sm:text-lg">
                    <p>We have been on the market for many years and during that period of time we have done a lot of high-quality and different works related to PVC and aluminum carpentry.
                        If you are interested in viewing our works, you can do so by clicking the button below.
                    </p>
                    <ButtonHolder className="pt-12">
                        <button type="button">
                            <Link href="/en/gallery" className="uppercase px-6 py-4 font-bold leading-6 text-white bg-transparent border-2 border-white rounded-xl
                    transition duration-300 hover:text-primary hover:bg-white hover:border-primary">View the gallery
                            </Link>
                        </button>
                    </ButtonHolder>
                </div>
            </Wrap>
        </Bar>
    )
}

export default WorksBar;

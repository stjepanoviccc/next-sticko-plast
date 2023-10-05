import Link from "next/link";
import Bar from "../../../ui/Bar";
import Wrap from "../../../ui/Wrap";
import ButtonHolder from "../../../ui/ButtonHolder";

const WorksBar = () => {

    return (
        <Bar bgColor="primary" textColor="white">
            <Wrap className="pt-12 pb-12 md:pt-16 md:pb-16">
                <div className="flex flex-row justify-center gap-x-16 gap-y-12font-bold  lg:gap-x-24">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Naši radovi</h2>
                </div>
                <div className="flex flex-col justify-center items-center pt-4 pb-4 text-center sm:text-lg">
                    <p>Već dugi niz godina smo na tržištu i u toku tog vremenskog perioda odradili smo mnogo kvalitetnih i različitih radova koji se odnose na PVC i Alu stolariju.
                        Ukoliko ste zainteresovani da pogledate naše radove, to možete učiniti klikom na dugme ispod.
                    </p>
                    <ButtonHolder className="pt-12">
                        <button type="button">
                            <Link href="/galerija" className="uppercase px-6 py-4 font-bold leading-6 text-white bg-transparent border-2 border-white rounded-xl
                    transition duration-300 hover:text-primary hover:bg-white hover:border-primary">Pogledajte galeriju
                            </Link>
                        </button>
                    </ButtonHolder>
                </div>
            </Wrap>
        </Bar>
    )
}

export default WorksBar;

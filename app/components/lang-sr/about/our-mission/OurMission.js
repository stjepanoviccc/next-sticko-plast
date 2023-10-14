import Wrap from "../../../ui/Wrap"
import Card from "@/app/components/ui/Card"

const OurMission = () => {
    return (
        <section id="our-mission" className="bg-white">
            <Wrap className="py-12 md:py-32">
                <div className="flex justify-center items-center">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Naša misija</h2>
                </div>
                <div className="flex flex-col justify-center items-center pt-8 pb-4 text-center sm:text-lg lg:pt-12 lg:pb-8">
                    <p className="font-bold">Naša misija je da pružimo vrhunske usluge montaže PVC i Alu stolarije, postavljajući industrijski standard za kvalitet i zadovoljstvo mušterija.</p>
                    <p className="font-bold">Fokusirani smo na sledeće stvari:</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4  lg:gap-x-8 text-secondary pt-8 text-center sm:text-lg lg:pt-12">
                    <Card className="items-center gap-y-4 px-8 py-8 lg:py-14 rounded-2xl border-2 hover:border-primary transition duration-300" href="/">
                        <h4 className="font-bold text-lg sm:text-xl pb-2 border-b-2 border-primary">Isporuka kvalitetnih proizvoda</h4>
                        <p>Nabavljamo i ugrađujemo prozore i vrata koja su izdržljiva, energetski učinkovita i estetski ugodna, poboljšavajući kako unutrašnjost tako i eksterijer prostora naših klijenata.</p>
                    </Card>
                    <Card className="items-center gap-y-4 px-8 py-8 lg:py-14 rounded-2xl border-2 hover:border-primary transition duration-300">
                    <h4 className="font-bold text-lg sm:text-xl pb-2 border-b-2 border-primary">Kvalitetan rad</h4>
                        <p>Naš tim obučenih profesionalaca ponosi se svojim radom, osiguravajući preciznu instalaciju, pažnju posvećenu detaljima i besprijekornu završnu obradu u svakom projektu.</p>
                    </Card>
                    <Card className="items-center gap-y-4 px-8 py-8 lg:py-14 rounded-2xl border-2 hover:border-primary transition duration-300">
                    <h4 className="font-bold  text-lg sm:text-xl pb-2 border-b-2 border-primary">Pristup usmeren na kupca</h4>
                        <p>Dajemo prioritet potrebama i preferencijama naših klijenata, nudeći personalizirana rješenja, transparentnu komunikaciju i pouzdanu podršku tokom cijelog procesa instalacije.</p>
                    </Card>
                    <Card className="items-center gap-y-4 px-8 py-8 lg:py-14 rounded-2xl border-2 hover:border-primary transition duration-300">
                        <h4 className="font-bold text-lg sm:text-xl pb-2 border-b-2 border-primary">Izgradnja poverenja</h4>
                        <p>Cilj nam je da izgradimo dugotrajne odnose sa našim klijentima, dobavljačima i partnerima, zasnovane na integritetu, pouzdanosti i posvećenosti ispunjavanju naših obećanja.</p>
                    </Card>
                </div>
            </Wrap>
        </section>
    )
}

export default OurMission

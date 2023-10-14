import Wrap from "../../../ui/Wrap";

const OurFirstSteps = () => {
    return (
        <section id="our-first-steps">
            <Wrap className="py-12 md:py-32">
                <div className="flex justify-center items-center lg:justify-start">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Naši prvi koraci</h2>
                </div>
                <div className="flex flex-col gap-x-40 gap-y-10 py-8 sm:text-lg lg:py-12 lg:flex-row">
                    <div className="flex-1 flex flex-col justify-center text-center lg:justify-start lg:text-left">
                        <p>
                            Naša priča je počela sa strašću za poboljšanjem estetike i funkcionalnosti životnih prostora. Sa jasnom vizijom i nepokolebljivom posvećenošću kvalitetu,
                            naš osnivač postavio je kamen temeljac naše firme - Šticko Plast.
                            U našim početnim fazama, suočili smo se sa izazovima sa kojima se susreće svako novo preduzeće. Međutim, kroz upornost i nepokolebljiv fokus na zadovoljstvo kupaca,
                            brzo smo stekli reputaciju pouzdanosti i tako se izdvojili na tržištu. 
                            Naši rani projekti poslužili su kao gradivni blokovi za naš rast, a svaki zadovoljan kupac postao je svedočanstvo naše posvećenosti.
                            Kako su se godine odvijale, tako se razvijala i naša stručnost. Naš tim se proširio, čineći iskusne profesionalce koji dele naše vrednosti i strast prema vrhunskoj izradi.
                            Neprestano smo usavršavali svoje veštine, prateći najnovije inovacije u industriji i prihvatili najsavremenije tehnologije da bismo našim klijentima pružili
                            najsavremenija rešenja.
                            Danas, sa velikim brojem uspešnih projekata iza nas, stojimo visoko kao svetionik poverenja i pouzdanosti u sektoru montaže PVC i Alu stolarije.
                        </p>
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

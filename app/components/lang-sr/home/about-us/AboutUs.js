import Link from "next/link";
import useCheckDevice from "../../../../custom-hooks/CheckDevice";
import Wrap from "../../../ui/Wrap";
import ButtonHolder from "../../../ui/ButtonHolder";
import AppearOnScroll from "../../../ui/animations/AppearOnScroll";

const AboutUs = () => {
  const windowWidth = useCheckDevice();

  return (
    <section id="our-mission">
      <AppearOnScroll fromLeft threshold={`${windowWidth > 1280 ? 0.3 : 0.1}`}>
        <Wrap className="py-12 md:py-32">
          <div className="flex justify-center items-center lg:justify-start">
            <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">O nama</h2>
          </div>
          <div className="flex flex-col gap-x-20 gap-y-10 py-8 sm:text-lg lg:py-12 lg:flex-row">
            <div className="flex-1 flex flex-col justify-center text-center lg:justify-start lg:text-left">
              <p>
                Mi smo revolucionari u svetu montaže vrata, prozora kao i druge PVC i Alu stolarije.
                Naš rani početak potiče još iz 2000-te godine, gde smo pokrenuli našu divnu priču nakon prve uspešne montaže i
                prvog zadovoljnog klijenta. Od samog početka smo posvećeni pretvaranju kuća u domove, jedan po jedan besprekorno
                dizajniran projekat. Naša vizija jeste da transformišemo domove i preduzeća kroz ugradnju stolarije vrhunskog
                kvaliteta. Težimo da budemo partner od poverenja koji poboljšava estetsku privlačnost, energetsku efikasnost
                i sigurnost svakog prostora koji dodirnemo.
                Naš portfolio se može pohvaliti nizom različitih projekata, od kojih svaki svedoči o našoj pažljivoj
                pažnji prema detaljima i našoj nepokolebljivoj posvećenosti podizanju estetike i funkcionalnosti domova.
                Ovo predivno putovanje obeležilo je rast, učenje i nemilosrdna težnja za izvrsnošću i radujemo se što ćemo
                podeliti našu stručnost sa Vama kako bi ostvarili sve što ste zamislili.
                Hvala Vam što ste deo našeg putovanja dok nastavljamo dalje u budućnost.
              </p>
              <ButtonHolder className="pt-12 py-4 lg:text-left">
                <button type="button">
                  <Link href="o-nama" className="uppercase px-6 py-4 font-bold leading-6 text-white bg-primary border-2 border-primary rounded-xl
                    transition duration-300 hover:text-primary hover:bg-white hover:border-primary">Više o nama
                  </Link>
                </button>
              </ButtonHolder>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <img className="max-h-[500px]" src="../../assets/about/our-mission.jpg" alt="about-img"></img>
            </div>
          </div>
          <div>
          </div>
        </Wrap>
      </AppearOnScroll>
    </section >
  )
}

export default AboutUs;
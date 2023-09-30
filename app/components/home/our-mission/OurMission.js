import Link from "next/link";
import useCheckDevice from "../../../custom-hooks/CheckDevice";
import Wrap from "../../ui/Wrap";
import ButtonHolder from "../../ui/ButtonHolder";
import AppearOnScroll from "../../ui/animations/AppearOnScroll";

const OurMission = () => {
  const windowWidth = useCheckDevice();

  return (
    <section id="our-mission">
      <AppearOnScroll fromLeft threshold={`${windowWidth > 1280 ? 0.3 : 0.1}`}>
      <Wrap className="py-12 md:py-32">
        <div className="flex justify-center items-center lg:justify-start">
          <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Naša misija</h2>
        </div>
        <div className="flex flex-col gap-x-20 gap-y-10 py-8 sm:text-lg lg:py-12 lg:flex-row">
          <div className="flex-1 flex flex-col justify-center text-center lg:justify-start lg:text-left">
            <p>
              Šticko Plast ima tradiciju dugu preko 20 godina u projektovanju, proizvodnji i montiranju PVC stolarije u cilju opremanja kako Vašeg doma, tako i Vašeg poslovnog prostora.
              Šticko Plast ima tradiciju dugu preko 20 godina u projektovanju, proizvodnji i montiranju PVC stolarije u cilju opremanja kako Vašeg doma, tako i Vašeg poslovnog prostora.
              Šticko Plast ima tradiciju dugu preko 20 godina u <span className="font-bold"> projektovanju, proizvodnji i montiranju PVC stolarije</span> u cilju opremanja kako Vašeg doma, tako i Vašeg poslovnog prostora.
              Šticko Plast ima tradiciju dugu preko 20 godina u projektovanju, proizvodnji i montiranju PVC stolarije u cilju opremanja kako Vašeg doma, tako i Vašeg poslovnog prostora.
              Šticko Plast ima tradiciju dugu preko 20 godina u projektovanju, proizvodnji i montiranju PVC stolarije u cilju opremanja kako Vašeg doma, tako i Vašeg poslovnog prostora.
              Šticko Plast ima tradiciju dugu preko 20 godina u projektovanju, proizvodnji i montiranju PVC stolarije u cilju opremanja kako Vašeg doma, tako i Vašeg poslovnog prostora.
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

export default OurMission;
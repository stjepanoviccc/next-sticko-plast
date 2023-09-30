import Wrap from '../../ui/Wrap';
import ButtonHolder from '../../ui/ButtonHolder';
import WorksSlider from './WorksSlider';
import Link from 'next/link';
import useCheckDevice from '../../../custom-hooks/CheckDevice';
import AppearOnScroll from '../../ui/animations/AppearOnScroll';

const OurWorks = () => {
  const windowWidth = useCheckDevice();

  return (
    <section id="our-works" className="bg-light" style={{ overflow: 'hidden' }}>
      <AppearOnScroll fromRight threshold={`${windowWidth > 1280 ? 0.3 : 0.2}`}>
      <Wrap className="pt-12 md:pt-32">
        <div className="flex justify-center items-center">
          <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Galerija naših radova</h2>
        </div>
        <div className="flex flex-col justify-center items-center py-8 text-center font-bold sm:text-lg lg:py-12">
          <p>Mesto gde možete pogledati neke od naših najboljih radova.</p>
          <p>Na ovim slikama se nalaze isključivo radovi koji su montirani od strane naše firme.</p>
        </div>
      </Wrap>
      <div className="pl-4 pr-4 pb-4 lg:pl-16 lg:pr-16">
        <WorksSlider />
      </div>
      <Wrap className="pb-12 md:pb-32">
        <ButtonHolder className="py-8 text-center">
          <button type="button">
            <Link href="galerija" className="uppercase px-6 py-4 font-bold leading-6 text-primary bg-transparent border-2 border-primary rounded-xl
                    transition duration-300 hover:text-white hover:bg-primary hover:border-primary">Pregledajte sve radove
            </Link>
          </button>
        </ButtonHolder>
      </Wrap>
      </AppearOnScroll>
    </section>
  )
}

export default OurWorks;

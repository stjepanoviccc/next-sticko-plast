import Wrap from '../../../ui/Wrap';
import ButtonHolder from '../../../ui/ButtonHolder';
import WorksSlider from './WorksSlider';
import Link from 'next/link';
import useCheckDevice from '../../../../custom-hooks/CheckDevice';
import AppearOnScroll from '../../../ui/animations/AppearOnScroll';

const OurWorks = () => {
  const windowWidth = useCheckDevice();

  return (
    <section id="our-works" className="bg-light" style={{ overflow: 'hidden' }}>
      <AppearOnScroll fromRight threshold={`${windowWidth > 1280 ? 0.3 : 0.2}`}>
      <Wrap className="pt-12 md:pt-32">
        <div className="flex justify-center items-center">
          <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Gallery of our works</h2>
        </div>
        <div className="flex flex-col justify-center items-center py-8 text-center font-bold sm:text-lg lg:py-12">
          <p>A place to see some of our best work.</p>
          <p>These pictures show only works mounted by our company.</p>
        </div>
      </Wrap>
      <div className="pl-4 pr-4 pb-4 lg:pl-16 lg:pr-16">
        <WorksSlider />
      </div>
      <Wrap className="pb-12 md:pb-32">
        <ButtonHolder className="py-8 text-center">
          <button type="button">
            <Link href="/en/gallery" className="uppercase px-6 py-4 font-bold leading-6 text-primary bg-transparent border-2 border-primary rounded-xl
                    transition duration-300 hover:text-white hover:bg-primary hover:border-primary">View all works
            </Link>
          </button>
        </ButtonHolder>
      </Wrap>
      </AppearOnScroll>
    </section>
  )
}

export default OurWorks;

import Head from "next/head";
import Hero from "../app/components/home/hero/Hero";
import OurMission from '../app/components/home/our-mission/OurMission';
import OurQualitiesBar from "../app/components/home/our-qualities/OurQualitiesBar";
import OurProducts from '../app/components/home/our-products/OurProducts';
import OurWorks from "../app/components/home/our-works/OurWorks";
import Questions from "../app/components/home/questions/Questions";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Šticko Plast - Montiranje PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
      </Head>
      <Hero />
      <OurMission />
      <OurQualitiesBar />
      <OurProducts />
      <OurWorks />
      <Questions />
    </>
  )
}

export default HomePage;
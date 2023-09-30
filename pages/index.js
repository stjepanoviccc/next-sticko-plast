import Head from "next/head";
import Hero from "../src/components/home/hero/Hero";
import OurMission from '../src/components/home/our-mission/OurMission';
import OurQualitiesBar from "../src/components/home/our-qualities/OurQualitiesBar";
import OurProducts from '../src/components/home/our-products/OurProducts';
import OurWorks from "../src/components/home/our-works/OurWorks";
import Questions from "../src/components/home/questions/Questions";
import RootLayout from "../app/RootLayout";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Šticko Plast - Montiranje PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
      </Head>
      <RootLayout>
        <Hero />
        <OurMission />
        <OurQualitiesBar />
        <OurProducts />
        <OurWorks />
        <Questions />
      </RootLayout>
    </>
  )
}

export default HomePage;
import Head from "next/head";
import Hero from "../app/components/lang-sr/home/hero/Hero";
import AboutUs from '../app/components/lang-sr/home/about-us/AboutUs';
import OurQualitiesBar from "../app/components/lang-sr/home/our-qualities/OurQualitiesBar";
import OurProducts from '../app/components/lang-sr/home/our-products/OurProducts';
import OurWorks from "../app/components/lang-sr/home/our-works/OurWorks";
import Questions from "../app/components/lang-sr/home/questions/Questions";
import OurPartners from "../app/components/lang-sr/home/our-partners/OurPartners";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Šticko Plast - Prodaja i montaža PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
      </Head>
      <Hero />
      <AboutUs />
      <OurQualitiesBar />
      <OurProducts />
      <OurWorks />
      <Questions />
      <OurPartners />
    </>
  )
}

export default HomePage;
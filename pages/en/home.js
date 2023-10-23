import Head from "next/head";
import Hero from "../../app/components/lang-en/home/hero/Hero";
import AboutUs from '../../app/components/lang-en/home/about-us/AboutUs';
import OurQualitiesBar from "../../app/components/lang-en/home/our-qualities/OurQualitiesBar";
import OurProducts from '../../app/components/lang-en/home/our-products/OurProducts';
import OurWorks from "../../app/components/lang-en/home/our-works/OurWorks";
import Questions from "../../app/components/lang-en/home/questions/Questions";
import OurPartners from "../../app/components/lang-en/home/our-partners/OurPartners";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Šticko Plast - Sales and installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
        <meta name="description" content="Our company offers you the opportunity to adapt your home to your wishes. We sell and install the highest quality custom-made PVC and aluminum carpentry for you, with a focus on quality and durability. For lasting satisfaction and an elegant look, choose us." />
        <meta name="robots" content="index"></meta>
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
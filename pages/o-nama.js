import Head from 'next/head';
import AboutHeader from '../app/components/lang-sr/about/AboutHeader';
import OurFirstSteps from '../app/components/lang-sr/about/our-first-steps/OurFirstSteps';
import AboutBar from '../app/components/lang-sr/about/bars/AboutBar';
import OurMission from '../app/components/lang-sr/about/our-mission/OurMission';
import WorksBar from '../app/components/lang-sr/about/bars/WorksBar';
import CustomerReviews from '../app/components/lang-sr/about/customer-reviews/CustomerReviews';

const AboutPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>O nama - Montiranje PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
      </Head>
      <AboutHeader />
      <OurFirstSteps />
      <AboutBar />
      <OurMission />
      <WorksBar />
      <CustomerReviews />
    </>
  )
}

export default AboutPage;
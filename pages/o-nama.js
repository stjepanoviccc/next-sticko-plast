import Head from 'next/head';
import AboutHeader from '../app/components/about/AboutHeader';
import OurFirstSteps from '../app/components/about/our-first-steps/OurFirstSteps';
import AboutBar from '../app/components/about/bars/AboutBar';
import OurMission from '../app/components/about/our-mission/OurMission';
import WorksBar from '../app/components/about/bars/WorksBar';
import CustomerReviews from '../app/components/about/customer-reviews/CustomerReviews';
import RootLayout from "../app/RootLayout";

const AboutPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>O nama - Šticko Plast - Montiranje PVC i Alu stolarije.</title>
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
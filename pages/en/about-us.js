import Head from 'next/head';
import AboutHeader from '../../app/components/lang-en/about/AboutHeader';
import OurFirstSteps from '../../app/components/lang-en/about/our-first-steps/OurFirstSteps';
import AboutBar from '../../app/components/lang-en/about/bars/AboutBar';
import OurMission from '../../app/components/lang-en/about/our-mission/OurMission';
import WorksBar from '../../app/components/lang-en/about/bars/WorksBar';
import CustomerReviews from '../../app/components/lang-en/about/customer-reviews/CustomerReviews';

const AboutPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About us - Šticko Plast - Installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
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
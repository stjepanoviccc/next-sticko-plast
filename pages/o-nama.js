import Head from 'next/head';
import AboutHeader from '../src/components/about/AboutHeader';
import OurFirstSteps from '../src/components/about/our-first-steps/OurFirstSteps';
import AboutBar from '../src/components/about/bars/AboutBar';
import OurMission from '../src/components/about/our-mission/OurMission';
import WorksBar from '../src/components/about/bars/WorksBar';
import CustomerReviews from '../src/components/about/customer-reviews/CustomerReviews';
import RootLayout from '@/app/RootLayout';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>O nama - Šticko Plast - Montiranje PVC i Alu stolarije.</title>
      </Head>
      <RootLayout>
        <AboutHeader />
        <OurFirstSteps />
        <AboutBar />
        <OurMission />
        <WorksBar />
        <CustomerReviews />
      </RootLayout>
    </>
  )
}

export default AboutPage;
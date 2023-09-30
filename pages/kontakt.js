import Head from "next/head";
import RootLayout from "../app/RootLayout";
import ContactHeader from "../src/components/contact/ContactHeader";
import Info from "../src/components/contact/Info";
import Questions from '../src/components/home/questions/Questions';
import Location from "../src/components/contact/Location";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Kontakt informacije - Šticko Plast - Montiranje PVC i Alu stolarije.</title>
      </Head>
      <RootLayout>
        <ContactHeader />
        <Info />
        <Questions page="contact" />
        <Location />
      </RootLayout>
    </>
  )
}

export default ContactPage;
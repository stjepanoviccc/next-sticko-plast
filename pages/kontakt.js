import Head from "next/head";
import ContactHeader from "../app/components/contact/ContactHeader";
import Info from "../app/components/contact/Info";
import Questions from '../app/components/home/questions/Questions';
import Location from "../app/components/contact/Location";

const ContactPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kontakt informacije - Šticko Plast - Montiranje PVC i Alu stolarije.</title>
      </Head>
      <ContactHeader />
      <Info />
      <Questions page="contact" />
      <Location />
    </>
  )
}

export default ContactPage;
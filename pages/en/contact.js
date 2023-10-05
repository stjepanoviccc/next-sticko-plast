import Head from "next/head";
import ContactHeader from "../../app/components/lang-en/contact/ContactHeader";
import Info from "../../app/components/lang-en/contact/Info";
import Questions from '../../app/components/lang-en/home/questions/Questions';
import Location from "../../app/components/lang-en/contact/Location";

const ContactPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact - Šticko Plast - Installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
      </Head>
      <ContactHeader />
      <Info />
      <Questions page="contact" />
      <Location />
    </>
  )
}

export default ContactPage;
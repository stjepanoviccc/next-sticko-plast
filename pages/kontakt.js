import Head from "next/head";
import ContactHeader from "../app/components/lang-sr/contact/ContactHeader";
import Info from "../app/components/lang-sr/contact/Info";
import Questions from '../app/components/lang-sr/home/questions/Questions';
import Location from "../app/components/lang-sr/contact/Location";

const ContactPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kontakt - Šticko Plast - Prodaja i montaža PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
        <meta name="robots" content="index"></meta>
      </Head>
      <ContactHeader />
      <Info />
      <Questions page="contact" />
      <Location />
    </>
  )
}

export default ContactPage;
import ProductsHeader from "../../../app/components/lang-en/products/ProductsHeader";
import Venetians from "../../../app/components/lang-en/products/venetians/Venetians";
import Head from "next/head";

const VenecijaneriPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Venetians - Šticko Plast - Installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
            </Head>
            <ProductsHeader sectionId="venetians-header" title="Products - Venetians" subtitle="On this page you can find all available products from our range
            which fall under the category - venetians." />
            <Venetians />
        </>
    )
};

export default VenecijaneriPage;
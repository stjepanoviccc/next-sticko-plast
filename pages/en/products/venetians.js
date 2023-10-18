import ProductsHeader from "../../../app/components/lang-en/products/ProductsHeader";
import Venetians from "../../../app/components/lang-en/products/venetians/Venetians";
import Head from "next/head";

const VenecijaneriPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Venetians - Šticko Plast - Sales and installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
            </Head>
            <ProductsHeader sectionId="venetians-header" title="Products - Venetians" subtitle="Our venetians combine flawless appearance with precise light control, giving you the perfect balance between style and functionality." />
            <Venetians />
        </>
    )
};

export default VenecijaneriPage;
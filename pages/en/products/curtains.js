import ProductsHeader from "../../../app/components/lang-en/products/ProductsHeader";
import Curtains from "../../../app/components/lang-en/products/curtains/Curtains";
import Head from "next/head";

const ZavesePage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Curtains - Šticko Plast - Sales and installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
            </Head>
            <ProductsHeader sectionId="curtains-header" title="Products - Curtains" subtitle="Our curtains allow you to adjust the light and create ambiance in any room, while adding a touch of elegance." />
            <Curtains />
        </>
    )
};

export default ZavesePage;
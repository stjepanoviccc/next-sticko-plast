import ProductsHeader from "../../../app/components/lang-en/products/ProductsHeader";
import Fences from "../../../app/components/lang-en/products/fences/Fences";
import Head from "next/head";

const OgradePage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Fences - Šticko Plast - Sales and installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
            </Head>
            <ProductsHeader sectionId="doors-header" title="Products - Fences" subtitle="Our fences offer a long-lasting solution for security and aesthetics, creating an attractive boundary for your home." />
            <Fences />
        </>
    )
};

export default OgradePage;
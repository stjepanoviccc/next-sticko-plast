import ProductsHeader from "../../../app/components/lang-en/products/ProductsHeader";
import Blinds from "../../../app/components/lang-en/products/blinds/Blinds";
import Head from "next/head";

const RoletnePage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Blinds - Šticko Plast - Sales and installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
            </Head>
            <ProductsHeader sectionId="blinds-header" title="Products - Blinds" subtitle="On this page you can find all available products from our range
            which fall under the category - blinds." />
            <Blinds />
        </>
    )
};

export default RoletnePage;
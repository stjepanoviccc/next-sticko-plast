import ProductsHeader from "../../../app/components/lang-en/products/ProductsHeader";
import Blinds from "../../../app/components/lang-en/products/blinds/Blinds";
import Head from "next/head";

const RoletnePage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Blinds - Šticko Plast - Sales and installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
                <meta name="robots" content="index"></meta>
            </Head>
            <ProductsHeader sectionId="blinds-header" title="Products - Blinds" subtitle="Our blinds provide the ideal solution for light control and privacy in your home, making it more comfortable and safer." />
            <Blinds />
        </>
    )
};

export default RoletnePage;
import ProductsHeader from "../../../app/components/lang-en/products/ProductsHeader";
import Doors from "../../../app/components/lang-en/products/doors/Doors";
import Head from "next/head";

const VrataPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Doors - Šticko Plast - Sales and installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
                <meta name="robots" content="index"></meta>
            </Head>
            <ProductsHeader sectionId="doors-header" title="Products - Doors" subtitle="Our door collection combines style and security, giving your home an elegant look and reliable protection." />
            <Doors />
        </>
    )
};

export default VrataPage;
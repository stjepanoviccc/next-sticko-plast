import ProductsHeader from "../../../app/components/lang-en/products/ProductsHeader";
import MosquitoNets from "../../../app/components/lang-en/products/mosquito-nets/MosquitoNets";
import Head from "next/head";

const KomarniciPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Mosquito Nets - Šticko Plast - Sales and installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
                <meta name="robots" content="index"></meta>
            </Head>
            <ProductsHeader sectionId="mosquitoNets-header" title="Products - Mosquito nets" subtitle="Our mosquito nets effectively prevent the entry of insects, preserving your comfort and peace in the house." />
            <MosquitoNets />
        </>
    )
};

export default KomarniciPage;
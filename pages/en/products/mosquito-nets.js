import ProductsHeader from "../../../app/components/lang-en/products/ProductsHeader";
import MosquitoNets from "../../../app/components/lang-en/products/mosquito-nets/MosquitoNets";
import Head from "next/head";

const KomarniciPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Mosquito Nets - Šticko Plast - Installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
            </Head>
            <ProductsHeader sectionId="mosquitoNets-header" title="Products - Mosquito nets" subtitle="On this page you can find all available products from our range
            which fall under the category - mosquito nets." />
            <MosquitoNets />
        </>
    )
};

export default KomarniciPage;
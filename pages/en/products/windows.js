import ProductsHeader from "../../../app/components/lang-en/products/ProductsHeader";
import Windows from "../../../app/components/lang-en/products/windows/Windows";
import Head from "next/head";

const ProzoriPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Windows - Šticko Plast - Installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
            </Head>
            <ProductsHeader sectionId="windows-header" title="Products - Windows" subtitle="On this page you can find all available products from our range
            which fall under the category - windows." />
            <Windows />
        </>
    )
};

export default ProzoriPage;
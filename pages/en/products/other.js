import ProductsHeader from "../../../app/components/lang-en/products/ProductsHeader";
import Other from "../../../app/components/lang-en/products/other/Other";
import Head from "next/head";

const OtherPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Other products - Šticko Plast - Sales and installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
            </Head>
            <ProductsHeader sectionId="other-header" title="Products - Other" subtitle="You can find all other products that do not have their own category within our company on this page." />
            <Other />
        </>
    )
};

export default OtherPage;
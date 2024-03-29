import ProductsHeader from "../../app/components/lang-sr/products/ProductsHeader";
import Blinds from "../../app/components/lang-sr/products/blinds/Blinds";
import Head from "next/head";

const RoletnePage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Roletne - Šticko Plast - Prodaja i montaža PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
                <meta name="robots" content="index"></meta>
            </Head>
            <ProductsHeader sectionId="blinds-header" title="Proizvodi - Roletne" subtitle="Naše roletne pružaju idealno rešenje za kontrolu svetla i privatnosti u Vašem domu, čineći ga udobnijim i sigurnijim." />
            <Blinds />
        </>
    )
};

export default RoletnePage;
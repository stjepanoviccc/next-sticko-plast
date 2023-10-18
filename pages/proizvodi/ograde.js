import ProductsHeader from "../../app/components/lang-sr/products/ProductsHeader";
import Fences from "../../app/components/lang-sr/products/fences/Fences";
import Head from "next/head";

const OgradePage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Ograde - Šticko Plast - Prodaja i montaža PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
            </Head>
            <ProductsHeader sectionId="doors-header" title="Proizvodi - Ograde" subtitle="Naše ograde nude dugotrajno rešenje za sigurnost i estetiku, stvarajući privlačnu granicu Vašeg doma." />
            <Fences />
        </>
    )
};

export default OgradePage;
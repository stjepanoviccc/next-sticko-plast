import ProductsHeader from "../../app/components/lang-sr/products/ProductsHeader";
import Curtains from "../../app/components/lang-sr/products/curtains/Curtains";
import Head from "next/head";

const ZavesePage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Zavese - Šticko Plast - Prodaja i montaža PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
            </Head>
            <ProductsHeader sectionId="curtains-header" title="Proizvodi - Zavese" subtitle="Naše zavese omogućavaju Vam da prilagodite svetlost i stvorite ambijent u svakoj sobi, istovremeno dodajući dašak elegancije." />
            <Curtains />
        </>
    )
};

export default ZavesePage;
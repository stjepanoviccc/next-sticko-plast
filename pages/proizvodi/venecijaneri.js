import ProductsHeader from "../../app/components/lang-sr/products/ProductsHeader";
import Venetians from "../../app/components/lang-sr/products/venetians/Venetians";
import Head from "next/head";

const VenecijaneriPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Venecijaneri - Šticko Plast - Prodaja i montaža PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
            </Head>
            <ProductsHeader sectionId="venetians-header" title="Proizvodi - Venecijaneri" subtitle="Naši venecijaneri spajaju besprekoran izgled s preciznom kontrolom svetlosti, pružajući vam savršenu ravnotežu između stila i funkcionalnosti." />
            <Venetians />
        </>
    )
};

export default VenecijaneriPage;
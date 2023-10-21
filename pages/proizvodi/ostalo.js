import ProductsHeader from "../../app/components/lang-sr/products/ProductsHeader";
import Other from "../../app/components/lang-sr/products/other/Other";
import Head from "next/head";

const OstaloPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Ostali proizvodi - Šticko Plast - Prodaja i montaža PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
            </Head>
            <ProductsHeader sectionId="ostalo-header" title="Proizvodi - Ostalo" subtitle="Sve ostale proizvode koji nemaju svoju kategoriju unutar naše firme možete pronaći na ovoj stranici." />
            <Other />
        </>
    )
};

export default OstaloPage;
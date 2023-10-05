import ProductsHeader from "../../app/components/lang-sr/products/ProductsHeader";
import Doors from "../../app/components/lang-sr/products/doors/Doors";
import Head from "next/head";

const VrataPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vrata - Šticko Plast - Montiranje PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
            </Head>
            <ProductsHeader sectionId="doors-header" title="Proizvodi - Vrata" subtitle="Na ovoj stranici možete pronaći sve dostupne proizvode iz našeg asortimana
            koji spadaju pod kategoriju - vrata." />
            <Doors />
        </>
    )
};

export default VrataPage;
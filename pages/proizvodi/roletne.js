import ProductsHeader from "../../app/components/lang-sr/products/ProductsHeader";
import Blinds from "../../app/components/lang-sr/products/blinds/Blinds";
import Head from "next/head";

const RoletnePage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Roletne - Šticko Plast - Montiranje PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
            </Head>
            <ProductsHeader sectionId="blinds-header" title="Proizvodi - Roletne" subtitle="Na ovoj stranici možete pronaći sve dostupne proizvode iz našeg asortimana
            koji spadaju pod kategoriju - roletne." />
            <Blinds />
        </>
    )
};

export default RoletnePage;
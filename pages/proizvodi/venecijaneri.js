import ProductsHeader from "../../app/components/products/ProductsHeader";
import Venetians from "../../app/components/products/venetians/Venetians";
import Head from "next/head";

const VenecijaneriPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Venecijaneri - Šticko Plast - Montiranje PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
            </Head>
            <ProductsHeader sectionId="venetians-header" title="Proizvodi - Venecijaneri" subtitle="Na ovoj stranici možete pronaći sve dostupne proizvode iz našeg asortimana
            koji spadaju pod kategoriju - venecijaneri." />
            <Venetians />
        </>
    )
};

export default VenecijaneriPage;
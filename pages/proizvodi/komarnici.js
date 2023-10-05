import ProductsHeader from "../../app/components/lang-sr/products/ProductsHeader";
import MosquitoNets from "../../app/components/lang-sr/products/mosquito-nets/MosquitoNets";
import Head from "next/head";

const KomarniciPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Komarnici - Šticko Plast - Montiranje PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
            </Head>
            <ProductsHeader sectionId="mosquitoNets-header" title="Proizvodi - Komarnici" subtitle="Na ovoj stranici možete pronaći sve dostupne proizvode iz našeg asortimana
            koji spadaju pod kategoriju - komarnici." />
            <MosquitoNets />
        </>
    )
};

export default KomarniciPage;
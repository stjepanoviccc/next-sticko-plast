import ProductsHeader from "../../app/components/products/ProductsHeader";
import Windows from "../../app/components/products/windows/Windows";
import Head from "next/head";

const ProzoriPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vrata - Šticko Plast - Montiranje PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
            </Head>
            <ProductsHeader sectionId="windows-header" title="Proizvodi - Prozori" subtitle="Na ovoj stranici možete pronaći sve dostupne proizvode iz našeg asortimana
            koji spadaju pod kategoriju - prozori." />
            <Windows />
        </>
    )
};

export default ProzoriPage;
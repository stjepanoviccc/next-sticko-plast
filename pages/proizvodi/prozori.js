import ProductsHeader from "../../app/components/lang-sr/products/ProductsHeader";
import Windows from "../../app/components/lang-sr/products/windows/Windows";
import Head from "next/head";

const ProzoriPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vrata - Šticko Plast - Prodaja i montaža PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
            </Head>
            <ProductsHeader sectionId="windows-header" title="Proizvodi - Prozori" subtitle="Naši prozori odlikuju se visokom energetskom efikasnošću, pružajući toplinu i udobnost Vašem domu uz smanjenje računa za energiju." />
            <Windows />
        </>
    )
};

export default ProzoriPage;
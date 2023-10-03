import ProductsHeader from "../../app/components/products/ProductsHeader";
import Doors from "../../app/components/products/doors/Doors";

const VrataPage = () => {
    return (
        <>
            <ProductsHeader sectionId="doors-header" title="Proizvodi - Vrata" subtitle="Na ovoj stranici možete pronaći sve dostupne proizvode iz našeg asortimana
            koji spadaju pod kategoriju - vrata." />
            <Doors />
        </>
    )
};

export default VrataPage;
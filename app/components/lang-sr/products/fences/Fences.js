import Wrap from "../../../ui/Wrap";
import ProductsItem from "../ProductsItem";
import fences from "./fences.json";

const Fences = () => {

    return (
        <>
            <section id="fences-section">
                <Wrap className="py-12 md:py-32" >
                    <h2 className="pb-4 text-2xl sm:text-4xl text-center md:text-left">Izaberite kategoriju:</h2>
                    <div className="text-center md:text-left">
                        <select value="all" disabled={true}>
                            <option value="all">Svi proizvodi</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 pt-8 sm:grid-cols-2 lg:gap-x-8 lg:grid-cols-3 lg:pt-12 text-secondary">
                            {Object.keys(fences).length === 0 ? (
                                <p>Nema proizvoda za prikazati.</p>
                            ) : (
                                Object.keys(fences).map((fencesKey) => (
                                    <ProductsItem key={fences} src={fences[fencesKey].src} category={fences[fencesKey].category} />
                                ))
                            )}
                    </div>
                </Wrap>
            </section>
        </>
    )
};

export default Fences;
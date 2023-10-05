import { useState, useEffect } from "react";
import Wrap from "../../../ui/Wrap";
import ProductsItem from "../ProductsItem";
import blinds from "./blinds.json";

const Blinds = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        // render after active changed
    }, [activeCategory]);

    const handleCategoryChange = (event) => {
        setActiveCategory(event.target.value);
    };

    return (
        <>
            <section id="blinds-section">
                <Wrap className="py-12 md:py-32" >
                    <h2 className="pb-4 text-2xl sm:text-4xl text-center md:text-left">Izaberite kategoriju:</h2>
                    <div className="text-center md:text-left">
                        <select onChange={handleCategoryChange} value={activeCategory}>
                            <option value="all">Svi proizvodi</option>
                            <option value="PVC">PVC</option>
                            <option value="Alu">Alu</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 pt-8 sm:grid-cols-2 lg:gap-x-8 lg:grid-cols-3 lg:pt-12 text-secondary">
                        {activeCategory === "all" && (
                            Object.keys(blinds).length === 0 ? (
                                <p>Nema proizvoda za prikazati.</p>
                            ) : (
                                Object.keys(blinds).map((blindsKey) => (
                                    <ProductsItem key={blindsKey} src={blinds[blindsKey].src} category={blinds[blindsKey].category} />
                                ))
                            )
                        )}
                        {(activeCategory === "PVC" || activeCategory === "Alu") && (
                            Object.keys(blinds)
                                .filter((blindsKey) => blinds[blindsKey].category === activeCategory).length === 0 ? (
                                <p>Nema proizvoda za prikazati.</p>
                            ) : (
                                Object.keys(blinds)
                                    .filter((blindsKey) => blinds[blindsKey].category === activeCategory)
                                    .map((blindsKey) => (
                                        <ProductsItem key={blindsKey} src={blinds[blindsKey].src} category={blinds[blindsKey].category} />
                                    ))
                            )
                        )}
                    </div>
                </Wrap>
            </section>
        </>
    )
};

export default Blinds;
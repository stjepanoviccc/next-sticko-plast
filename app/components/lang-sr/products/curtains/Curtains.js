import { useState, useEffect } from "react";
import Wrap from "../../../ui/Wrap";
import ProductsItem from "../ProductsItem";
import curtains from "./curtains.json";

const Curtains = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        // render after active changed
    }, [activeCategory]);

    const handleCategoryChange = (event) => {
        setActiveCategory(event.target.value);
    };

    return (
        <>
            <section id="curtains-section">
                <Wrap className="py-12 md:py-32" >
                    <h2 className="pb-4 text-2xl sm:text-4xl text-center md:text-left">Izaberite kategoriju:</h2>
                    <div className="text-center md:text-left">
                        <select onChange={handleCategoryChange} value={activeCategory}>
                            <option value="all">Svi proizvodi</option>
                            <option value="Zebraste">Zebraste</option>
                            <option value="Trakaste">Trakaste</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 pt-8 sm:grid-cols-2 lg:gap-x-8 lg:grid-cols-3 lg:pt-12 text-secondary">
                        {activeCategory === "all" && (
                            Object.keys(curtains).length === 0 ? (
                                <p>Nema proizvoda za prikazati.</p>
                            ) : (
                                Object.keys(curtains).map((curtainsKey) => (
                                    <ProductsItem key={curtainsKey} src={curtains[curtainsKey].src} category={curtains[curtainsKey].category} />
                                ))
                            )
                        )}
                        {(activeCategory === "Zebraste" || activeCategory === "Trakaste") && (
                            Object.keys(curtains)
                                .filter((curtainsKey) => curtains[curtainsKey].category === activeCategory).length === 0 ? (
                                <p>Nema proizvoda za prikazati.</p>
                            ) : (
                                Object.keys(curtains)
                                    .filter((curtainsKey) => curtains[curtainsKey].category === activeCategory)
                                    .map((curtainsKey) => (
                                        <ProductsItem key={curtainsKey} src={curtains[curtainsKey].src} category={curtains[curtainsKey].category} />
                                    ))
                            )
                        )}
                    </div>
                </Wrap>
            </section>
        </>
    )
};

export default Curtains;
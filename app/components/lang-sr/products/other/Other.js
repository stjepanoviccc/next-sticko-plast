import { useState, useEffect } from "react";
import Wrap from "../../../ui/Wrap";
import ProductsItem from "../ProductsItem";
import other from "./other.json";

const Other = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        // render after active changed
    }, [activeCategory]);

    const handleCategoryChange = (event) => {
        setActiveCategory(event.target.value);
    };

    return (
        <>
            <section id="other-section">
                <Wrap className="py-12 md:py-32" >
                    <h2 className="pb-4 text-2xl sm:text-4xl text-center md:text-left">Izaberite kategoriju:</h2>
                    <div className="text-center md:text-left">
                        <select onChange={handleCategoryChange} value={activeCategory}>
                            <option value="all">Svi proizvodi</option>
                            <option value="Rolo garažna">Rolo garažna</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 pt-8 sm:grid-cols-2 lg:gap-x-8 lg:grid-cols-3 lg:pt-12 text-secondary">
                        {activeCategory === "all" && (
                            Object.keys(other).length === 0 ? (
                                <p>Nema dostupnih slika za odabrani proizvod.</p>
                            ) : (
                                Object.keys(other).map((otherKey) => (
                                    <ProductsItem key={otherKey} src={other[otherKey].src} category={other[otherKey].category} />
                                ))
                            )
                        )}
                        {(activeCategory === "Rolo garažna") && (
                            Object.keys(other)
                                .filter((otherKey) => other[otherKey].category === activeCategory).length === 0 ? (
                                <p>Nema dostupnih slika za odabrani proizvod.</p>
                            ) : (
                                Object.keys(other)
                                    .filter((otherKey) => other[otherKey].category === activeCategory)
                                    .map((otherKey) => (
                                        <ProductsItem key={otherKey} src={other[otherKey].src} category={other[otherKey].category} />
                                    ))
                            )
                        )}
                    </div>
                </Wrap>
            </section>
        </>
    )
};

export default Other;
import { useState, useEffect } from "react";
import Wrap from "../../../ui/Wrap";
import ProductsItem from "../ProductsItem";
import doors from "./doors.json";

const Doors = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        // render after active changed
    }, [activeCategory]);

    const handleCategoryChange = (event) => {
        setActiveCategory(event.target.value);
    };

    return (
        <>
            <section id="doors-section">
                <Wrap className="py-12 md:py-32" >
                        <h2 className="pb-4 text-2xl sm:text-4xl text-center md:text-left">Select a category:</h2>
                    <div className="text-center md:text-left">
                        <select onChange={handleCategoryChange} value={activeCategory}>
                            <option value="all">All products</option>
                            <option value="PVC">PVC</option>
                            <option value="Alu">Alu</option>
                            <option value="Rollo garage">Rollo garage</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 pt-8 sm:grid-cols-2 lg:gap-x-8 lg:grid-cols-3 lg:pt-12 text-secondary">
                        {activeCategory === "all" && (
                            Object.keys(doors).length === 0 ? (
                                <p>There are no products to display.</p>
                            ) : (
                                Object.keys(doors).map((doorKey) => (
                                    <ProductsItem key={doorKey} src={doors[doorKey].src} category={doors[doorKey].category} alt={doors[doorKey].alt} />
                                ))
                            )
                        )}
                        {(activeCategory === "PVC" || activeCategory === "Alu" || activeCategory === "Rollo garage") && (
                            Object.keys(doors)
                                .filter((doorKey) => doors[doorKey].category === activeCategory).length === 0 ? (
                                <p>There are no products to display.</p>
                            ) : (
                                Object.keys(doors)
                                    .filter((doorKey) => doors[doorKey].category === activeCategory)
                                    .map((doorKey) => (
                                        <ProductsItem key={doorKey} src={doors[doorKey].src} category={doors[doorKey].category} alt={doors[doorKey].alt} />
                                    ))
                            )
                        )}
                    </div>
                </Wrap>
            </section>
        </>
    )
};

export default Doors;
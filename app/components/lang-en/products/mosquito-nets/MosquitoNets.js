import { useState, useEffect } from "react";
import Wrap from "../../../ui/Wrap";
import ProductsItem from "../ProductsItem";
import mosquitoNets from "./mosquitoNets.json";

const MosquitoNets = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        // render after active changed
    }, [activeCategory]);

    const handleCategoryChange = (event) => {
        setActiveCategory(event.target.value);
    };

    return (
        <>
            <section id="mosquitoNets-section">
                <Wrap className="py-12 md:py-32" >
                    <h2 className="pb-4 text-2xl sm:text-4xl text-center md:text-left">Select a category:</h2>
                    <div className="text-center md:text-left">
                        <select value={activeCategory} onChange={handleCategoryChange} >
                            <option value="all">All products</option>
                            <option value="PVC">PVC</option>
                            <option value="Alu">Alu</option>
                            <option value="Roll">Roll</option>
                            <option value="Plisse">Plisse</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 pt-8 sm:grid-cols-2 lg:gap-x-8 lg:grid-cols-3 lg:pt-12 text-secondary">
                    {activeCategory === "all" && (
                            Object.keys(mosquitoNets).length === 0 ? (
                                <p>There are no images available for the selected product.</p>
                            ) : (
                                Object.keys(mosquitoNets).map((mosquitoNetsKey) => (
                                    <ProductsItem key={mosquitoNetsKey} src={mosquitoNets[mosquitoNetsKey].src} category={mosquitoNets[mosquitoNetsKey].category} />
                                ))
                            )
                        )}
                        {(activeCategory === "PVC" || activeCategory === "Alu" || activeCategory === "Roll" || activeCategory === "Fixed" || activeCategory === "Plisse" ) && (
                            Object.keys(mosquitoNets)
                                .filter((mosquitoNetsKey) => mosquitoNets[mosquitoNetsKey].category === activeCategory).length === 0 ? (
                                <p>There are no images available for the selected product.</p>
                            ) : (
                                Object.keys(mosquitoNets)
                                    .filter((mosquitoNetsKey) => mosquitoNets[mosquitoNetsKey].category === activeCategory)
                                    .map((mosquitoNetsKey) => (
                                        <ProductsItem key={mosquitoNetsKey} src={mosquitoNets[mosquitoNetsKey].src} category={mosquitoNets[mosquitoNetsKey].category} />
                                    ))
                            )
                        )}
                    </div>
                </Wrap>
            </section>
        </>
    )
};

export default MosquitoNets;
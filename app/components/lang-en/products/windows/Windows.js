import { useState, useEffect } from "react";
import Wrap from "../../../ui/Wrap";
import ProductsItem from "../ProductsItem";
import windows from "./windows.json";

const Windows = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        // render after active changed
    }, [activeCategory]);

    const handleCategoryChange = (event) => {
        setActiveCategory(event.target.value);
    };

    return (
        <>
            <section id="windows-section">
                <Wrap className="py-12 md:py-32" >
                    <h2 className="pb-4 text-2xl sm:text-4xl text-center md:text-left">Select a category:</h2>
                    <div className="text-center md:text-left">
                        <select onChange={handleCategoryChange} value={activeCategory}>
                            <option value="all">All products</option>
                            <option value="PVC">PVC</option>
                            <option value="Alu">Alu</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 pt-8 sm:grid-cols-2 lg:gap-x-8 lg:grid-cols-3 lg:pt-12 text-secondary">
                        {activeCategory === "all" && (
                            Object.keys(windows).length === 0 ? (
                                <p>There are no products to display.</p>
                            ) : (
                                Object.keys(windows).map((windowsKey) => (
                                    <ProductsItem key={windowsKey} src={windows[windowsKey].src} category={windows[windowsKey].category} />
                                ))
                            )
                        )}
                        {(activeCategory === "PVC" || activeCategory === "Alu") && (
                            Object.keys(windows)
                                .filter((windowsKey) => windows[windowsKey].category === activeCategory).length === 0 ? (
                                <p>There are no products to display.</p>
                            ) : (
                                Object.keys(windows)
                                    .filter((windowsKey) => windows[windowsKey].category === activeCategory)
                                    .map((windowsKey) => (
                                        <ProductsItem key={windowsKey} src={windows[windowsKey].src} category={windows[windowsKey].category} />
                                    ))
                            )
                        )}
                    </div>
                </Wrap>
            </section>
        </>
    )
};

export default Windows;
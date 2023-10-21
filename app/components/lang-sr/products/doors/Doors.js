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
                    <h2 className="pb-4 text-2xl sm:text-4xl text-center md:text-left">Izaberite kategoriju:</h2>
                    <div className="text-center md:text-left">
                        <select onChange={handleCategoryChange} value={activeCategory}>
                            <option value="all">Svi proizvodi</option>
                            <option value="PVC">PVC</option>
                            <option value="Alu">Alu</option>
                            <option value="Balkonska">Balkonska</option>
                            <option value="Ulazna">Ulazna</option>
                            <option value="Klizna">Klizna</option>
                            <option value="Sobna">Sobna</option>
                            <option value="Jednokrilna">Jednokrilna</option>
                            <option value="Dvokrilna">Dvokrilna</option>
                            <option value="Kombi sistem">Kombi sistem</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 pt-8 sm:grid-cols-2 lg:gap-x-8 lg:grid-cols-3 lg:pt-12 text-secondary">
                        {activeCategory === "all" && (
                            Object.keys(doors).length === 0 ? (
                                <p>Nema dostupnih slika za odabrani proizvod.</p>
                            ) : (
                                Object.keys(doors).map((doorKey) => (
                                    <ProductsItem key={doorKey} src={doors[doorKey].src} category={doors[doorKey].category} alt={doors[doorKey].alt} />
                                ))
                            )
                        )}
                        {(activeCategory === "PVC" || activeCategory === "Alu" || activeCategory === "Balkonska" || activeCategory === "Ulazna" ||
                            activeCategory === "Klizna" || activeCategory === "Sobna" || activeCategory === "Jednokrilna" || activeCategory === "Dvokrilna" || activeCategory === "Kombi sistem")
                            && (
                                Object.keys(doors)
                                    .filter((doorKey) => doors[doorKey].category === activeCategory).length === 0 ? (
                                    <p>Nema dostupnih slika za odabrani proizvod.</p>
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
import { useState, useEffect } from "react";
import Wrap from "../../ui/Wrap";
import ProductsItem from "../ProductsItem";
import doors from "./doors.json";

const PvcDoors = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        // render after active changed
    }, [activeCategory]);

    return (
        <>
            <section className="bg-light" id="doors-section">
                <Wrap className="py-12 md:py-32" >
                    <div className="flex justify-center items-center gap-x-8">
                        <button onClick={() => setActiveCategory("all")} className="lg:w-[300px] border-2 border-primary bg-primary text-white p-4 text-lg">Svi proizvodi</button>
                        <button onClick={() => setActiveCategory("PVC")} className="lg:w-[300px] border-2 border-primary p-4 text-lg">PVC</button>
                        <button onClick={() => setActiveCategory("Alu")} className="lg:w-[300px] border-2 border-primary p-4 text-lg">ALU</button>
                        <button onClick={() => setActiveCategory("nema")} className="lg:w-[300px] border-2 border-primary p-4 text-lg">Rolo garažna</button>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 pt-8 sm:grid-cols-2 lg:gap-x-8 lg:grid-cols-3 lg:pt-12 text-secondary font-bold">
                        {activeCategory === "all" && (
                            Object.keys(doors).map((doorKey) => (
                                <ProductsItem key={doorKey} src={doors[doorKey].src} category={doors[doorKey].category} />
                            ))
                        )}
                        {(activeCategory === "PVC" || activeCategory === "Alu" || activeCategory === "Rolo garažna") && (
                            Object.keys(doors)
                                .filter((doorKey) => doors[doorKey].category === activeCategory)
                                .map((doorKey) => (
                                    <ProductsItem key={doorKey} src={doors[doorKey].src} category={doors[doorKey].category} />
                                ))
                        )}
                    </div>
                </Wrap>
            </section>
        </>
    )
};

export default PvcDoors;
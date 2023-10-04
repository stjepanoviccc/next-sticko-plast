import Wrap from "../ui/Wrap";

const ProductsSection = ({ sectionId, title, products }) => {
    return (
        <section className="bg-light" id={sectionId} >
            <Wrap className="py-12 md:py-32">
                <div className="flex justify-center items-center">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">{title}</h2>
                </div>
                <div className="flex flex-col items-center justify-center sm:grid sm:gap-x-4 sm:gap-y-4 sm:grid-cols-2 lg:gap-x-8 lg:grid-cols-3 lg:pt-12
                 text-secondary font-bold pt-8 ">
                    {products}
                </div>
            </Wrap>
        </section>
    )
}

export default ProductsSection;

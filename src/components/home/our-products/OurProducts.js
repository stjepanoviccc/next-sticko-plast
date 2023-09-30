import Link from "next/link";
import Wrap from "../../ui/Wrap";
import ProductsSlider from "./ProductsSlider";
import ButtonHolder from "../../ui/ButtonHolder";
import AppearOnScroll from "../../ui/animations/AppearOnScroll";
import useCheckDevice from "../../../custom-hooks/CheckDevice";

const OurProducts = () => {
  const windowWidth = useCheckDevice();

  return (
    <section id="our-products">
      <AppearOnScroll fromLeft threshold={`${windowWidth > 1280 ? 0.3 : 0.2}`}>
        <Wrap className="py-12 md:py-32">
          <div className="flex justify-center items-center">
            <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Naši proizvodi</h2>
          </div>
          <div className="flex flex-col justify-center items-center py-8 text-center font-bold sm:text-lg lg:py-12">
            <p>Nudimo Vam veoma širok asortiman PVC i Alu stolarije.</p>
            <p>Ovde možete pronaći sve što je potrebno za Vaš dom odnosno Vaš poslovni prostor.</p>
          </div>
          <div className="pb-4">
            <ProductsSlider />
          </div>
          <ButtonHolder className="py-8 text-center">
            <button type="button">
              <Link href="proizvodi" className="uppercase px-6 py-4 font-bold leading-6 text-white bg-primary border-2 border-primary rounded-xl
                    transition duration-300 hover:text-primary hover:bg-transparent hover:border-primary">Pregledajte sve proizvode
              </Link>
            </button>
          </ButtonHolder>
        </Wrap>
      </AppearOnScroll>
    </section>
  )
}

export default OurProducts;
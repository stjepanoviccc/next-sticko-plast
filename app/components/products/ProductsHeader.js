import Wrap from '../ui/Wrap';

const ProductsHeader = ({sectionId, title, subtitle}) => {

    return (
        <section id={sectionId} className="bg-cover bg-bottom lg:bg-fixed" style={{ backgroundImage: `url('../../../assets/header/products-min.jpg')` }}>
            <Wrap className="flex flex-col justify-center text-center text-white font-bold sm:text-left">
                <h1 className="pt-16 text-4xl sm:text-[60px] md:pt-32 lg:pt-52 lg:text-[80px]">{title}</h1>
                <h2 className="max-w-2xl pt-2 pb-16 sm:text-xl sm:pt-8 md:pb-32 lg:pb-52">{subtitle}</h2>
            </Wrap>
        </section>
    )
}

export default ProductsHeader;
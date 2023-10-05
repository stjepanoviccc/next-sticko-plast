const ProductsItem = ({ src, category, alt }) => {

    return (
        <div className="border-4 max-w-[400px] w-full overflow-hidden" style={{ margin: '0px auto' }}>
            <img
                className="h-[450px] w-full transform scale-100 hover:scale-125 hover:cursor-pointer transition-transform duration-300 ease-in-out transform-origin-center"
                src={src} alt={alt}
            />
            <h4 className="text-xl text-center py-2 font-bold">{category}</h4>
        </div>
    );
};

export default ProductsItem;
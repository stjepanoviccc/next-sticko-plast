const ProductsItem = ({ src, category }) => {
    return (
        <div className="border-4 max-w-[400px]" style={{margin: '0px auto'}}>
            <img className="h-[300px]" src={src} alt={category} />
            <h4 className="text-xl text-center py-2">{category}</h4>
        </div>
    )
};

export default ProductsItem;
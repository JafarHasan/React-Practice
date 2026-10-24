import productData from './data.json';
import ProductCard from './ProductCard';
const Main = () => {
    return (
        <>
            <div className="p-5 m-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-between ">
                {
                    productData.map((product) => (
                        <ProductCard key={product.id}
                            product={product} />
                    ))
                }
            </div>
        </>
    )
}
export default Main;
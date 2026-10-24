import ProductCard from './ProductCard';
import { ProductContext } from './contextSwitching/ProductContext';
import { useContext } from 'react';
const Main = () => {
    const { filteredProducts } = useContext(ProductContext);
    return (
        <>
            <div className="p-5 m-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-between ">
                {
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id}
                            product={product} />
                    ))
                }
            </div>
        </>
    )
}
export default Main;
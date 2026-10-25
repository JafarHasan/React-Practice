import { useContext } from "react";
import { ProductContext } from "./contextSwitching/ProductContext";
const ProductCard = ({ product }) => {
    const {
        cartItems,
        handleAddToCart,
    } = useContext(ProductContext);

    const isAdded = cartItems.some((item) => item.id === product.id);
    return (
        <>
            <div className="flex flex-col shadow-xl border border-gray-400 rounded bg-white">
                <img
                    src={`${product.image}`}
                    className="w-full h-60 object-cover "
                ></img>
                <div className=" flex flex-col w-full p-3 gap-1">
                    <div className="flex justify-between">
                        <h1 className="text-xl font-bold text-blue-600">
                            {product.title}
                        </h1>
                        <p className="text-yellow-500">★{product.rating}</p>

                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500">{product.category}</p>
                        <p className="text-gray-500">{product.brand}</p>

                    </div>
                    <p className="text-xl text-blue-600">₹:{product.price}</p>
                    <button
                        onClick={() => handleAddToCart(product.id)}
                        disabled={isAdded}
                        className={`w-full p-4 bg-blue-600 text-white rounded hover:bg-white hover:text-blue-600 hover:border ${isAdded ? "cursor-not-allowed bg-green-400 hover:bg-green-400" : ""}`}>{isAdded ? "Added to cart ✓" : "Add to cart"}</button>
                </div>

            </div >

        </>
    )
}
export default ProductCard;
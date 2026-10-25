
import { useContext, useState } from "react";
import { ProductContext } from "./contextSwitching/ProductContext";

const CartSidebar = () => {
    const {
        cartItems,
        isCartOpen,
        handleCartOpenClose,
        handleRemoveCartItem,
    } = useContext(ProductContext);
    const [cartTotal, setCartTotal] = useState(0);
    const calculateCartTotal = () => {
        const sum = cartItems.reduce((acc, item) => {
            acc += item.price;
            return acc;
        }, 0);
        return sum;
    }
    return (
        <nav
            className={`fixed top-0 right-0 z-50 h-screen w-70 max-w-full
                bg-white shadow-xl p-5  overflow-y-auto
                transition-transform duration-300 ease-in-out flex flex-col items-center
                ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="flex items-center justify-between mb-6 gap-10">
                <h2 className="text-xl font-bold">Your Cart ({cartItems.length})</h2>

                <button
                    onClick={handleCartOpenClose}
                    className="text-2xl cursor-pointer"
                    aria-label="Close cart"
                >
                    &times;
                </button>
            </div>

            {cartItems.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-500 mb-4">
                        Your cart is empty
                    </p>
                    <p className="text-sm text-gray-400">
                        Add products to see your cart details.
                    </p>
                </div>
            ) : (
                cartItems.map((cartItem) => (
                    <div key={cartItem.id} className="border-b p-3 border border-gray-400 rounded my-3">
                        <img
                            src={cartItem.image}
                            alt={cartItem.title}
                            className="w-full h-50 object-cover"
                        />
                        <div className="flex justify-between">
                            <h1 className="text-lg text-blue-600">
                                {cartItem.title}
                            </h1>
                            <p className="text-yellow-500">★{cartItem.rating}</p>
                        </div>

                        <div className="flex justify-between">
                            <p>{cartItem.category}</p>
                            <p>{cartItem.brand}</p>

                        </div>
                        <p className="text-xl text-green-800 font-bold">₹:{cartItem.price}</p>

                        <button
                            onClick={() => handleRemoveCartItem(cartItem.id)}
                            className={` w-full p-1 rounded  hover:bg-blue-700text-sm text-white bg-blue-700 border cursor-pointer `}>Remove</button>
                    </div>
                ))

            )}

            {/* Cart Summary */}
            <div className="w-60 mt-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
                <h2 className="text-lg font-bold mb-4">
                    Cart Summary
                </h2>

                <div className="flex justify-between mb-3">
                    <p className="text-gray-600">Total Items:</p>
                    <p className="font-semibold">
                        {cartItems.length}
                    </p>
                </div>

                <div className="flex justify-between border-t pt-3">
                    <p className="font-bold">Total Amount:</p>
                    <p className="text-xl font-bold text-green-700">
                        ₹{calculateCartTotal()}
                    </p>
                </div>
                <button
                    disabled={cartItems.length === 0}
                    className={`my-3 w-full p-3 text-sm bg-green-600 text-white rounded hover:bg-white hover:text-green-600 hover:border ${cartItems.length === 0 ? "cursor-not-allowed opacity-40" : ""} `}>Confirm Order</button>
            </div>


        </nav>
    );
};

export default CartSidebar;

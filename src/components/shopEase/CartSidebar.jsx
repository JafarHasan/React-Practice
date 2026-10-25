
import { useContext } from "react";
import { ProductContext } from "./contextSwitching/ProductContext";

const CartSidebar = () => {
    const {
        cartItems,
        isCartOpen,
        handleCartOpenClose,
    } = useContext(ProductContext);

    return (
        <nav
            className={`fixed top-0 right-0 z-50 h-screen w-70 max-w-full
                bg-white shadow-xl p-5  overflow-y-auto
                transition-transform duration-300 ease-in-out flex flex-col items-center
                ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Your Cart</h2>

                <button
                    onClick={handleCartOpenClose}
                    className="text-2xl cursor-pointer"
                    aria-label="Close cart"
                >
                    &times;
                </button>
            </div>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((cartItem) => (
                    <div key={cartItem.id} className="border-b py-3 border border-gray-400 p-2 rounded my-3">
                        <img
                            src={cartItem.image}
                            alt={cartItem.title}
                            className="w-50 h-50 object-cover"
                        />
                        <h3>{cartItem.title}</h3>
                        <button className={` w-20 p-1 rounded-xl  hover:bg-blue-700 hover:text-white text-sm bg-white-700 text-blue-700 border cursor-pointer `}>Remove</button>
                    </div>
                ))
            )}
        </nav>
    );
};

export default CartSidebar;

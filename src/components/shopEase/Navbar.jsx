import { useContext } from "react";
import { ProductContext } from "./contextSwitching/ProductContext";
import CartSidebar from "./CartSidebar";
const Navbar = () => {
    const {
        cartItems,
        setCartItems,
        handleCartOpenClose,
    } = useContext(ProductContext);
    return (
        <>
            <nav className="p-5 m-5 shadow flex items-center justify-between">
                <div>
                    <h1 className="text-xl text-blue-700 font-bold">ShopEase</h1>
                    <p className="text-gray-500">Product Store</p>
                </div>
                <div>
                    <button
                        onClick={handleCartOpenClose}
                        className="text-md font-bold border border-gray-400 p-3 rounded cursor-pointer"
                    >{`Cart (${cartItems.length})`}</button>
                </div>
                <CartSidebar />
            </nav>
        </>
    )
}
export default Navbar;
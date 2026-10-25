import { useContext } from "react";
import { ProductContext } from "./contextSwitching/ProductContext";
const LowerNavbar = () => {
    const {
        search,
        setSearch,
        category,
        setCategory,
        sortBy,
        setSortBy
    } = useContext(ProductContext);
    return (
        <>
            <nav className="p-5 m-5 flex flex-col gap-2 justify-between md:flex-row">
                <div className="w-full md:w-100">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Product........."
                        className="w-full p-4 outline-0 border border-gray-400 rounded-xl text-sm"
                    ></input>
                </div>
                <div>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full p-4 ouline-0 border border-gray-400 text-sm">
                        <option value="default">Default</option>
                        <option value="price-low-high">Price: Low to High</option>
                        <option value="price-high-low">Price: High to Low</option>
                        <option value="rating">Rating: High to Low</option>
                    </select>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <button
                        onClick={() => setCategory("all")}
                        className={`p-2  rounded-xl  hover:bg-blue-700 hover:text-white text-sm ${category === 'all' ? "bg-blue-700 text-white " : "text-gray-500 bg-gray-200"}`}
                    >All Products</button>

                    <button
                        onClick={() => setCategory("clothing")}
                        className={`p-2  rounded-xl  hover:bg-blue-700 hover:text-white text-sm ${category === 'clothing' ? "bg-blue-700 text-white " : "text-gray-500 bg-gray-200"}`}
                    >Clothing</button>

                    <button
                        onClick={() => setCategory("electronics")}
                        className={`p-2  rounded-xl  hover:bg-blue-700 hover:text-white text-sm ${category === 'electronics' ? "bg-blue-700 text-white " : "text-gray-500 bg-gray-200"}`}
                    >Electronics</button>

                    <button
                        onClick={() => setCategory("accessories")}
                        className={`p-2  rounded-xl  hover:bg-blue-700 hover:text-white text-sm ${category === 'accessories' ? "bg-blue-700 text-white " : "text-gray-500 bg-gray-200"}`}
                    >Accessories</button>
                </div>
            </nav>
        </>
    )
}
export default LowerNavbar;
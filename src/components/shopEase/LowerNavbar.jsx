const LowerNavbar = () => {
    return (
        <>
            <nav className="p-5 m-5 flex flex-col gap-2 justify-between md:flex-row">
                <div className="w-full md:w-100">
                    <input
                        placeholder="Search Product........."
                        className="w-full p-4 outline-0 border border-gray-400 rounded-xl text-sm"
                    ></input>
                </div>
                <div>
                    <select className="w-full p-4 ouline-0 border border-gray-400 text-sm">
                        <option>Price:Low to High</option>
                        <option >Price:High to Low</option>
                    </select>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <button className="p-4 rounded-xl text-gray-500 bg-gray-200 hover:bg-blue-700 hover:text-white text-sm"
                    >All Products</button>

                    <button className="p-4 rounded-xl text-gray-500 bg-gray-200 hover:bg-blue-700 hover:text-white text-sm"
                    >Clothing</button>

                    <button className="p-4 rounded-xl text-gray-500 bg-gray-200 hover:bg-blue-700 hover:text-white text-sm"
                    >Electronics</button>

                    <button className="p-4 rounded-xl text-gray-500 bg-gray-200 hover:bg-blue-700 hover:text-white text-sm"
                    >Accessories</button>
                </div>
            </nav>
        </>
    )
}
export default LowerNavbar;
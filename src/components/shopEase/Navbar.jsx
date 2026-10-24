const Navbar = () => {
    return (
        <>
            <nav className="p-5 m-5 shadow flex items-center justify-between">
                <div>
                    <h1 className="text-xl text-blue-700 font-bold">ShopEase</h1>
                    <p className="text-gray-500">Product Store</p>
                </div>
                <div>
                    <img></img>
                    <p className="text-md font-bold">Cart {0}</p>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
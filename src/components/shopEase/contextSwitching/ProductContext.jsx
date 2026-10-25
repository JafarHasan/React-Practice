import { createContext, useEffect, useMemo, useState } from "react";
import productData from '../data.json';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    // Original Data
    const [products] = useState(productData)

    const [filteredProducts, setFilteredProducts] = useState(productData);

    const [cartItems, setCartItems] = useState([]);

    //Searching data
    const [search, setSearch] = useState("");

    //category
    const [category, setCategory] = useState("all")

    //sorting
    const [sortBy, setSortBy] = useState("default");

    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartOpenClose = () => {
        setIsCartOpen((prev) => !prev);
    };

    const handleAddToCart = (id) => {
        const newItem = filteredProducts.find((item) => item.id === id);
        if (!newItem) return;
        setCartItems((prevCart) => [...prevCart, newItem])
    }
    const handleRemoveCartItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    }
    useEffect(() => {
        let filterCurrData = [...products];
        if (search.trim() !== "") {
            filterCurrData = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()) ||
                product.category.toLowerCase().includes(search.toLowerCase()) ||
                product.brand.toLowerCase().includes(search.toLowerCase()));
        }

        if (category !== 'all') {
            filterCurrData = filterCurrData.filter((product) => product.category.toLowerCase().includes(category.toLowerCase()));
        }
        if (sortBy === 'price-low-high') {
            filterCurrData.sort((a, b) => a.price - b.price)
        }
        else if (sortBy === 'price-high-low') {
            filterCurrData.sort((a, b) => b.price - a.price)
        }
        else if (sortBy === 'rating') {
            filterCurrData.sort((a, b) => b.rating - a.rating)
        }
        setFilteredProducts(filterCurrData);

    }, [search, category, sortBy])
    return (
        <ProductContext.Provider
            value={{
                products,
                filteredProducts,
                search,
                setSearch,
                category,
                setCategory,
                sortBy,
                setSortBy,
                cartItems,
                setCartItems,
                isCartOpen,
                setIsCartOpen,
                handleCartOpenClose,
                handleAddToCart,
                handleRemoveCartItem,

            }}
        >
            {children}
        </ProductContext.Provider>
    )
}
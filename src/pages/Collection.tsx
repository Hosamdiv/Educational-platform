import { useContext, useEffect, useState, useCallback } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import type { IProducts } from "../interface/products";

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);
    const [category, setCategory] = useState<string[]>([]);
    const [subCategory, setSubCategory] = useState<string[]>([]);
    const [sortType, setSortType] = useState("relevant");

    const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(prev =>
            prev.includes(e.target.value)
                ? prev.filter(item => item !== e.target.value)
                : [...prev, e.target.value]
        );
    };

    const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubCategory(prev =>
            prev.includes(e.target.value)
                ? prev.filter(item => item !== e.target.value)
                : [...prev, e.target.value]
        );
    };

    const filterAndSort = useCallback(() => {
        let productsCopy = [...products];
        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item =>
                category.includes(item.category)
            );
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item =>
                subCategory.includes(item.subCategory)
            );
        }

        switch (sortType) {
            case "low-high":
                productsCopy.sort((a, b) => a.price - b.price);
                break;
            case "high-low":
                productsCopy.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        setFilteredProducts(productsCopy);
    }, [products, category, subCategory, sortType, search, showSearch]);

    useEffect(() => {
        filterAndSort();
    }, [filterAndSort]);

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            {/* Filter Options */}
            <div className="min-w-60">
                <p
                    onClick={() => setShowFilter(!showFilter)}
                    className="my-2 text-xl flex items-center cursor-pointer gap-2"
                >
                    FILTER
                    <img
                        className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
                        src={assets.dropdown_icon}
                        alt="dropdown_icon"
                    />
                </p>

                {/* Category Filter*/}
                <div
                    className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"
                        }`}
                >
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <label className="flex gap-2">
                            <input
                                className="w-3"
                                type="checkbox"
                                value="Men"
                                onChange={toggleCategory}
                            />
                            Men
                        </label>
                        <label className="flex gap-2">
                            <input
                                className="w-3"
                                type="checkbox"
                                value="Women"
                                onChange={toggleCategory}
                            />
                            Women
                        </label>
                        <label className="flex gap-2">
                            <input
                                className="w-3"
                                type="checkbox"
                                value="Kids"
                                onChange={toggleCategory}
                            />
                            Kids
                        </label>
                    </div>
                </div>

                {/* SubCategory Filter */}
                <div
                    className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? "" : "hidden"
                        }`}
                >
                    <p className="mb-3 text-sm font-medium">TYPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <label className="flex gap-2">
                            <input
                                className="w-3"
                                type="checkbox"
                                value="Topwear"
                                onChange={toggleSubCategory}
                            />
                            Topwear
                        </label>
                        <label className="flex gap-2">
                            <input
                                className="w-3"
                                type="checkbox"
                                value="Bottomwear"
                                onChange={toggleSubCategory}
                            />
                            Bottomwear
                        </label>
                        <label className="flex gap-2">
                            <input
                                className="w-3"
                                type="checkbox"
                                value="Winterwear"
                                onChange={toggleSubCategory}
                            />
                            Winterwear
                        </label>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1="ALL" text2="COLLECTIONS" />
                    {/* product Sort */}
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="border-2 border-gray-300 text-sm px-2"
                    >
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/* Map Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filteredProducts.map((item) => (
                        <ProductItem
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            key={item._id}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;

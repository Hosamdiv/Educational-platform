import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import type { IProducts } from "../interface/products";



const Collection = () => {
    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(true);
    const [filterPorduct, setFilterPorduct] = useState<IProducts[]>([]);
    const [category, setCategory] = useState<string[]>([]);
    const [subCategory, setSubCategory] = useState<string[]>([]);

    const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setCategory(prev => [...prev, e.target.value])
        }
    }
    const togglesubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }
    useEffect(() => {
        setFilterPorduct(products);
    }, [products]);
    useEffect(() => {
        console.log(category);
    }, [category])
    useEffect(() => {
        console.log(subCategory);
    }, [subCategory])
    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

            {/* Filter Options */}
            <div className="min-w-60">
                <p
                    onClick={() => setShowFilter(!showFilter)}
                    className="my-2 text-xl flex items-center cursor-pointer gap-2">
                    FILTER
                    <img className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="dropdown_icon" />
                </p>
                {/* Category Filter*/}
                <div className={`border border-gray-300 pl-5 py-3 mt-6
                    ${showFilter ? "" : "hidden"}
                    `}>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Men"} onChange={toggleCategory} />Men
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Women"} onChange={toggleCategory} />Women
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Kids"} onChange={toggleCategory} />Kids
                        </p>
                    </div>
                </div>
                {/* SubCategory Filter */}
                <div className={`border border-gray-300 pl-5 py-3 my-6
                    ${showFilter ? "" : "hidden"}
                    `}>
                    <p className="mb-3 text-sm font-medium">TYPY</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox"
                                value={"Topwear"}
                                onChange={togglesubCategory} />Topwear
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox"
                                value={"Bottomwear"}
                                onChange={togglesubCategory} />Bottomwear
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox"
                                value={"Winterwear"}
                                onChange={togglesubCategory} />Winterwear
                        </p>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1="ALL" text2="COLLECTIONS" />
                    {/* porduct Sort */}
                    <select className="border-2 border-gray-300 text-sm px-2">
                        <option value={"relacent"}>Sort by: Relavent</option>
                        <option value={"low-higt"}>Sort by: Low to Higt</option>
                        <option value={"ihgt-low"}>Sort by: Higt to Low</option>
                    </select>
                </div>
                {/* Map Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {
                        filterPorduct.map((item, idx) => (
                            <ProductItem id={item._id}
                                name={item.name}
                                price={item.price}
                                key={idx}
                                image={item.image}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Collection
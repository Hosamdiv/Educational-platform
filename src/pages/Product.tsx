import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subCategory: string;
  image: string[];
  sizes: string[];
}
const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState<IProduct | null>(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("")

  
  useEffect(() => {
    if (products && productId) {
      const foundProduct = products.find((item) => item._id === productId);

      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.image[0])
      }
    }
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100
    ">
      {/* Product Date */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, idx) => (
              <img onClick={() => setImage(item)} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" src={item} key={idx} alt="" />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto " alt="" />
          </div>
        </div>
        {/* ----- Product Info ------ */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, idx) => (
                <button onClick={() => setSize(item)}
                  className={`rounded border-2 py-2 px-4 bg-gray-100 ${item === size ? "border-red-600 bg-red-200" : ""}`}
                  key={idx}>{item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* ------- Description & Review Section -------- */}
      <div className="mt-20 ">
        <div className="flex">
          <p className="border px-5 py-3 text-sm font-medium">
            Description
          </p>
          <p className="border px-5 py-3 text-sm">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>An e-commerce website is an online platform that
            facilitates the buying and selling of products or
            services over the internet. It erves as a virtual
            marketplace where businesses and individuals can
            showcase their products, interact with customers,
            and conduct transactions without the need for a
            physical presence. E-commerce websites have gained
            immense popularity due to their convenience,
            accessibility, and the global reach they offer.</p>
        </div>
      </div>

      {/* ------ display related products ------- */}


      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className="opacity-0">

  </div>
}

export default ProductPage
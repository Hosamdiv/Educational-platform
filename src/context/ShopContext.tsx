import { createContext, useState, type ReactNode } from "react";
import { products } from "../assets/assets";
import type { IProducts } from "../interface/products";
import { toast } from "react-toastify";

export interface ShopContextType {
  products: IProducts[];
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (itemId: string, size: string) => void;
  getCartCount: () => number;
  cartItems: CartItem;
  updateQuantity: (itemId: string, size: string, quantity: number) => void;
  getCartAmount: () => number;
}

interface ShopContextProviderProps {
  children: ReactNode;
}

interface CartItem {
  [itemId: string]: {
    [size: string]: number;
  };
}

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: "$",
  delivery_fee: 0,
  search: "",
  setSearch: () => { },
  showSearch: true,
  setShowSearch: () => { },
  addToCart: () => { },
  getCartCount: () => 0,
  cartItems: {},
  updateQuantity: () => { },
  getCartAmount: () => 0,
});

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem>({});


  const addToCart = (itemId: string, size: string) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    const cartData = structuredClone(cartItems);

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (!cartData[itemId][size]) {
      cartData[itemId][size] = 1;
    } else {
      cartData[itemId][size] += 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);

        }
      }
    }
    return totalCount;
  }

  const updateQuantity = (itemId: string | number, size: string | number, quantity: number) => {
    const cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData)
  }


  const getCartAmount = (): number => {
    let totalAmount = 0;

    for (const productId in cartItems) {
      const itemInfo = products.find((product) => product._id === productId);

      if (!itemInfo) continue;

      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size];
        if (quantity > 0) {
          totalAmount += itemInfo.price * quantity;
        }
      }
    }

    return totalAmount;
  };

  const value: ShopContextType = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    getCartCount,
    cartItems,
    updateQuantity,
    getCartAmount,
    // navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

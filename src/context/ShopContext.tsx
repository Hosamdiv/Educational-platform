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
});

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState<CartItem>({});

  const addToCart = (itemId: string, size: string) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    const cartData = structuredClone(cartItem);

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (!cartData[itemId][size]) {
      cartData[itemId][size] = 1;
    } else {
      cartData[itemId][size] += 1;
    }

    setCartItem(cartData);
  };
  // useEffect(() => {
  //   console.log(cartItem);

  // }, [cartItem])

  const value: ShopContextType = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

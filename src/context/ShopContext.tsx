import { createContext, useState, type ReactNode } from "react";
import { products } from "../assets/assets";
import type { IProducts } from "../interface/products";

export interface ShopContextType {
  products: IProducts[];
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ShopContextProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: "$",
  delivery_fee: 0,
  search: "",
  setSearch: () => { },
  showSearch: true,
  setShowSearch: () => { }

});

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(true);
  const value: ShopContextType = {
    products,
    currency,
    delivery_fee,
    search, setSearch, showSearch, setShowSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

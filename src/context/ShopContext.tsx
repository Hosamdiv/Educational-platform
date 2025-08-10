import { createContext, type ReactNode } from "react";
import { products } from "../assets/assets";
import type { IProducts } from "../interface/products";

export interface ShopContextType {
  products: IProducts[];
  currency: string;
  delivery_fee: number;
}

interface ShopContextProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: "$",
  delivery_fee: 0
});

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const currency = "$";
  const delivery_fee = 10;

  const value: ShopContextType = {
    products,
    currency,
    delivery_fee
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

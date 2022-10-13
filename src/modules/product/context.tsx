import React, { createContext, useContext, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { IProduct } from "./model";

interface IProductState {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  fetchProduct: () => void;
}
const ProductContext = createContext<IProductState>({
  products: [],
  setProducts() {},
  fetchProduct() {},
});

export const useProductState = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("context must be wrapped around the app provider");
  }
  return context;
};
interface IProps {
  children: React.ReactNode;
}

export const ProductContextProvider: React.FC<IProps> = ({ children }) => {
  const [product, setProduct] = useState<IProduct>();
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProduct = async () => {
    const { data, error } = await supabase.from("products").select();
    // setProducts(data);
    console.log(data);
  };
  return (
    <ProductContext.Provider value={{ products, setProducts, fetchProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

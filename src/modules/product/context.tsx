import React, { createContext, useContext, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { IProduct } from "./model";

interface IProductState {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  fetchProduct: () => void;
  addProduct: (values: any) => void;
  updateProduct: (values: any) => void;
}
const ProductContext = createContext<IProductState>({
  products: [],
  setProducts() {},
  fetchProduct() {},
  addProduct(values) {},
  updateProduct(values) {},
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
    if (data) {
      setProducts(data as any);
      console.log(data);
    } else {
      console.log(error);
    }
  };

  const addProduct = async (values: any) => {
    const payload = {
      name: values.name,
      address: values.address,
      phoneNumber: values.phoneNumber,
      price: values.price,
      color: values.color,
      description: values.description,
      size: values.size,
      category: values.category,
      condition: values.condition,
    };
    const { data, error } = await supabase.from("products").insert([payload]);

    if (data) {
      setProducts(data as any);
      console.log(data);
    } else {
      console.log(error);
    }
  };

  const updateProduct = async (values: any) => {
    const { data, error } = await supabase
      .from("products")
      .update([values])
      .eq("id", values.id);

    if (data) {
      setProducts(data as any);
      console.log(data);
    } else {
      console.log(error);
    }
  };
  return (
    <ProductContext.Provider
      value={{ products, setProducts, fetchProduct, addProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

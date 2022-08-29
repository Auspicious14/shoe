import { ProviderId } from "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import PRODUCTS_DATA from "../../dummydata/index.json";

// interface IProductState {
//   products: any;
// }
const ProductContext = createContext({
  products: PRODUCTS_DATA,
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
  const [products, setProducts] = useState(PRODUCTS_DATA);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

import React from "react";
import { ProductDetail } from "../../modules/product/detail";
import { IProduct } from "../../modules/product/model";
import { getOneProduct } from "../../modules/product/query";

interface IProps {
  product: IProduct;
}
const Product: React.FC<IProps> = ({ product }) => {
  return <ProductDetail product={product} />;
};

export default Product;

export async function getServerSideProps(context: any) {
  console.log(
    context.query.id,
    "iddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
  );
  const getSingleProduct: any = await getOneProduct({ id: context.query.id });
  console.log(getSingleProduct);

  return {
    props: { product: getSingleProduct },
  };
}

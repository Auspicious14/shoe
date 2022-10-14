import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { IProduct } from "./model";

export const getOneProduct = async (values: any) => {
  let product = {};
  const { data, error } = await supabase
    .from("products")
    .select()
    .eq("id", values.id);
  if (data) {
    product = data[0];
    console.log(product, "productttttttttttttttttttttt");
  } else {
    console.log(error);
  }

  return product;
};

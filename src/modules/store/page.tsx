import { Image, Link } from "@chakra-ui/react";
import React from "react";
import { Navigation } from "../../components";

export const StorePage = () => {
  return (
    <>
      <Navigation />
      <Link href="/detail">
        <Image src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      </Link>
    </>
  );
};

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { UserContextProvider } from "../modules/auth/context";
import "../styles/globals.css";
import { ProductContextProvider } from "../modules/product/context";
import { supabase } from "../utils/supabaseClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <UserContextProvider>
          <ProductContextProvider>
            <Head>
              <meta charSet="UTF-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
            </Head>
            <Component {...pageProps} />
          </ProductContextProvider>
        </UserContextProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { UserContextProvider } from "../modules/auth/context";
import "../styles/globals.css";
import { ProductContextProvider } from "../modules/product/context";
import { supabase } from "../utils/supabaseClient";
import { ProfileContextProvider } from "../modules/profile/context";
import { FavoriteContextProvider } from "../modules/favorite/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <ProfileContextProvider>
          <UserContextProvider>
            <ProductContextProvider>
              <FavoriteContextProvider>
                <Head>
                  <meta charSet="UTF-8" />
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                  />
                </Head>
                <Component {...pageProps} />
              </FavoriteContextProvider>
            </ProductContextProvider>
          </UserContextProvider>
        </ProfileContextProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

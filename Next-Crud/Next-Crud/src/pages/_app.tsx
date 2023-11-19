import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext } from "react";
import { useState } from "react";
import NextNProgress from "nextjs-progressbar";

export type IAuthObj = {
  auth: boolean;
  setAuth: (val: boolean) => void;
};

const initialContextState = {
  auth: false,
  setAuth: (val: boolean) => {},
};

export const AppContext = createContext<IAuthObj>(initialContextState);

export default function App({ Component, pageProps }: AppProps) {
  let [auth, setAuth] = useState(false);
  return (
    <>
      <AppContext.Provider value={{ auth, setAuth }}>
        <NextNProgress />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

import { Inter } from "next/font/google";
import LoginScreen from "./login";
// import { useContext } from "react";
// import { AppContext } from "./_app";
// import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const router = useRouter();

  // const { auth } = useContext(AppContext);
  // console.log("auth", auth);
  return (
    <>
      <LoginScreen />
    </>
  );
}

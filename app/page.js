import Image from "next/image";
import Herosection from "./components/landing/Herosection";
import Aboutus from "./components/landing/Aboutus";
import Features from "./components/landing/Features";

export default function Home() {
  return (
   <>
   <Herosection/>
   <Aboutus/>
   <Features/>
   </>
  );
}

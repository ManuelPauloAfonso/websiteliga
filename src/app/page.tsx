import Image from "next/image";
import Navbar from "../components/molecules/navbar";
import Banner from "../components/molecules/banner";
import About from "../components/molecules/about";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
    </div>
  );
}

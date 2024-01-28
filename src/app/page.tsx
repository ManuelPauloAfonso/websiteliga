import Image from "next/image";
import Navbar from "../components/molecules/navbar";
import Banner from "../components/molecules/banner";
import About from "../components/molecules/about";
import League from "../components/molecules/league";
import Blog from "../components/molecules/blog";
import Footer from "../components/molecules/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <League />
      <Blog />
      <Footer />
    </div>
  );
}

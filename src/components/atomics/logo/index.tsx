import Image from "next/image";
import Link from "next/link";
import Logos from "../../../assets/logo.png";

const Logo = () => {
  return (
    <Link href={"#"}>
      <Image width={70} src={Logos} alt="aqui vai a logo do site" />
    </Link>
  );
};

export default Logo;

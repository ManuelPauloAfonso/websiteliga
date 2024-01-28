import CustomLink from "../../atomics/customLink";
import Logo from "../../atomics/logo";

const Navbar = () => {
  return (
    <header className="flex justify-between  items-center p-6 shadow bg-[##FFF] w-full flex-wrap">
      <Logo />
      <ul className="flex items-center gap-8 text-[#36384E] font-normal">
        <li>
          <CustomLink href="/">Início</CustomLink>
        </li>
        <li>
          <CustomLink href="#">Notícias</CustomLink>
        </li>
        <li>
          <CustomLink href="#">Associação</CustomLink>
        </li>
        <li>
          <CustomLink href="#">Plataformas</CustomLink>
        </li>
        <li>
          <CustomLink href="#">Serviços</CustomLink>
        </li>
        <li>
          <CustomLink href="#">Denúncias</CustomLink>
        </li>
        <li>
          <CustomLink href="/contacto">Contactos</CustomLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

import CustomLink from "../../atomics/customLink";
import Logo from "../../atomics/logo";

const Navbar = () => {
  return (
    <header className="flex justify-between  items-center p-6 shadow bg-[##FFF] w-full flex-wrap">
      <Logo />
      <ul className="flex items-center gap-8 text-blue-500 font-normal">
        <li>
          <CustomLink href="course">Inicio</CustomLink>
        </li>
        <li>
          <CustomLink href="#">Nossos cursos</CustomLink>
        </li>
        <li>
          <CustomLink href="#">Displinas</CustomLink>
        </li>
        <li>
          <CustomLink href="#">Material de Estudo</CustomLink>
        </li>
        <li>
          <CustomLink href="contacto">Contactos</CustomLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

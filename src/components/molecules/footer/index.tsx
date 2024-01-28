import Image from "next/image";
import Container from "../../container";
import face from "../../../assets/face.svg";
import insta from "../../../assets/inta.svg";
import linke from "../../../assets/link.svg";
import Link from "next/link";
import Button from "../../atomics/button";

export default function Footer() {
  return (
    <div className="bg-[#36384E] text-white py-10 flex justify-center mt-20">
      <Container>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="text-center mb-8 lg:mb-0">
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">
              Faça Parte da Nossa Comunidade
            </h1>
            <p className="mb-4 text-center">
              Receba conselhos especializados para a sua jornada universitária
              na sua caixa de entrada todos os meses. É curto e vale a pena –
              prometemos!
            </p>
            <form action="" className="mb-4">
              <input
                type="text"
                placeholder="Digite o seu email"
                className="border border-white rounded py-2 px-4 w-full"
              />
              <div className="mt-5">
                <Button title="Candidatar-se" />
              </div>
            </form>
            <div className="mb-4 border-b border-white w-full h-2"></div>
            <div className="flex justify-center mt-10 gap-6">
              <Image src={face} alt="facebook" className="w-12 h-12" />
              <Image src={insta} alt="instagram" className="w-12 h-12" />
              <Image src={linke} alt="linkedin" className="w-12 h-12" />
            </div>
            <ul className="flex space-x-4 justify-center mt-5">
              <li>
                <Link href="/about">
                  <span className="text-white hover:text-gray-300">About</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-white hover:text-gray-300">
                    Contact us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/faqs">
                  <span className="text-white hover:text-gray-300">FAQs</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">
                  <span className="text-white hover:text-gray-300">
                    Terms and Conditions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy">
                  <span className="text-white hover:text-gray-300">
                    Cookie Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <span className="text-white hover:text-gray-300">
                    Privacy
                  </span>
                </Link>
              </li>
            </ul>
            <div className="text-center text-sm mt-8">
              © AAUE 2023 | TODOS OS DIREITOS RESERVADOS
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

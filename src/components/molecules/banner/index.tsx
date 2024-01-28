import Container from "../../container";

export default function Banner() {
  return (
    <div className="bg-[url('../assets/banner.png')] bg-cover bg-center h-[50rem] flex items-center  justify-center  flex-col">
      <Container>
        <h1 className="text-5xl text-white text-center font-bold">
          Liga de Estudantes Africanos
          <br />
          da Universidade de Évora
        </h1>
        <br />
        <p className="text-white text-3xl text-center">
          Potenciando Teu Envolvimento e Desenvolvimento Académicos. Conta com a
          AAUE para o teu crescimento pessoal e profissional, através de eventos
          culturais, desportivos, lúdicos, cívicos, sociais, pedagógicos e mais.
        </p>
      </Container>
    </div>
  );
}

import Link from "next/link";
import Container from "../../container";
import { Depoiment } from "@/src/utils/league";
import Image from "next/image";

export default function League() {
  return (
    <div className="flex items-center justify-center mt-20">
      <Container>
        <div className="bg-[url('../assets/buss.svg')] flex justify-center items-center  p-12 rounded">
          <div className="flex justify-center gap-10">
            {Depoiment.map((data) => (
              <div
                key={data.id}
                className="bg-white p-6 flex items-center rounded-2xl gap-2"
              >
                <Image src={data.image} alt="imagem do card" />
                <div>
                  <h1 className="font-medium text-[#36384E]">{data.name}</h1>
                  <p>{data.testimony}</p>
                  <Link href={"#"}></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

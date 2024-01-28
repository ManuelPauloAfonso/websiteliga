import Link from "next/link";
import Container from "../../container";
import { Depoiment } from "@/src/utils/league";
import Image from "next/image";
import { BlogData } from "@/src/utils/blog";
import SectionTitle from "../../atomics/sectionTitle";

export default function Blog() {
  return (
    <div className="flex items-center justify-center mt-20">
      <Container>
        <SectionTitle title="NOTÍCIAS" />
        <div className="flex justify-center gap-10 MT-20">
          {BlogData.map((data) => (
            <div
              key={data.id}
              className="bg-white p-8 shadow-lg rounded-2xl gap-2"
            >
              <Image
                src={data.image}
                alt={`Imagem do card do blog ${data.title}`}
                className="rounded"
              />
              <div>
                <h1 className="mt-2 font-medium text-[#36384E]">
                  {data.title}
                </h1>
                <p className="mt-2">{data.content}</p>
                <p className="text-gray-500 mt-2">{`Por ${data.author} em ${data.date}`}</p>
                <Link className="text-[#E5B300] mt-2" href={`#`}>
                  Leia mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

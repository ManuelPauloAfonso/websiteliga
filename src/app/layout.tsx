import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liga dos Estudantes - Universidade de Évora",
  description:
    "Explore a comunidade vibrante da Liga dos Estudantes na Universidade de Évora. Conectamos, celebramos e potenciamos o desenvolvimento acadêmico e pessoal dos estudantes. Descubra eventos culturais, desportivos, lúdicos e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

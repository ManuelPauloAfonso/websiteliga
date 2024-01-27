import Link from "next/link";
import React from "react";

type props = {
  href: string;
  children: React.ReactNode;
};
function CustomLink({ children, href }: props) {
  return (
    <Link
      className="leading-6 text-xl  transition duration-300 ease-in-out"
      href={href}
    >
      {children}
    </Link>
  );
}

export default CustomLink;

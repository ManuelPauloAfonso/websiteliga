interface SectionTitleProps {
  title: string;
}
export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[##36384E] font-medium text-3xl text-center">
        {title}
      </h1>
      <div className="bg-[#E5B300] w-36 h-3 rounded-xl flex justify-center mt-3"></div>
    </div>
  );
}

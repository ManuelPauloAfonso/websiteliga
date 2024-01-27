type propsButton = {
  title: string;
};

export default function Button({ title }: propsButton) {
  return (
    <button className="rounded w-[11.063rem] h-[2.875rem] border-none button bg-yellow-500">
      {title}
    </button>
  );
}

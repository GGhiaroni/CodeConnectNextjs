import Image from "next/image";
import logo from "./logo.png";

export const Aside = () => {
  return (
    <aside className="rounded-lg px-4 py-10 bg-[#171D1F] h-full">
      <Image src={logo} alt="Logo Code Connect" width={300} height={300} />
    </aside>
  );
};

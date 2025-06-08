import Image from "next/image";
import Link from "next/link";
import logo from "./logo.png";

export const Aside = () => {
  return (
    <aside className="rounded-lg px-4 py-10 bg-[#171D1F] h-full">
      <Link href={"/"}>
        <Image src={logo} alt="Logo Code Connect" width={300} height={300} />
      </Link>
    </aside>
  );
};

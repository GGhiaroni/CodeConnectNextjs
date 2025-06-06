import Image from "next/image";

export const Avatar = ({ name, imageSrc }) => {
  return (
    <ul className="m-0 p-0 list-none flex justify-end items-center gap-2 text-[#888888] text-[15px] not-italic font-semibold leading-[150%]">
      <li>
        <Image
          src={imageSrc}
          width={32}
          height={32}
          alt={`Avatar do usuário(a) ${name}`}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
};

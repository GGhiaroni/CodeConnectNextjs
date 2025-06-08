import Image from "next/image";
import { Avatar } from "../Avatar";

export const CardPost = ({ post }) => {
  return (
    <article className="w-full rounded-lg bg-[#171D1F]">
      <header className="bg-[#888] p-6 rounded-t-lg ">
        <figure className="m-0">
          <Image
            src={post.cover}
            width={438}
            height={133}
            alt={`Capa do post ${post.title}`}
          />
        </figure>
      </header>
      <section className="text-[#BCBCBC] p-4 flex flex-col gap-2">
        <h2 className="text-[18px] font-semibold leading-[150%] m-0">
          {post.title}
        </h2>
        <p className="text-[15px] font-normal leading-[150%] m-0 grow">
          {post.body}
        </p>
      </section>
      <footer className="p-4">
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};

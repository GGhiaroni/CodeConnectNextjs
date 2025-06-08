import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";
import "./globals.css";

async function getAllPosts(page) {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  );
  if (!response.ok) {
    logger.error("Houve um problema ao tentar acessar os posts.");
    return [];
  }
  logger.info("Posts obtidos com sucesso.");
  return response.json();
}

export default async function Home({ searchParams }) {
  const paginaAtual = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(paginaAtual);
  return (
    <main className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
      {posts.map((post) => (
        <CardPost post={post} key={post.id} />
      ))}
      {prev && (
        <Link className="link-paginacao" href={`/?page=${prev}`}>
          Página anterior
        </Link>
      )}
      {next && (
        <Link className="link-paginacao" href={`/?page=${next}`}>
          Próxima página
        </Link>
      )}
    </main>
  );
}

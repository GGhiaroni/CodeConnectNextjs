import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import "./globals.css";

async function getAllPosts(page) {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  );
  if (!response.ok) {
    logger.error("Houve um problema ao tentar acessar os posts.");
  }
  logger.info("Posts obtidos com sucesso.");
  return response.json();
}

export default async function Home() {
  const { data: posts } = await getAllPosts(1);
  return (
    <main className="grid">
      {posts.map((post) => (
        <CardPost post={post} key={post.id} />
      ))}
    </main>
  );
}

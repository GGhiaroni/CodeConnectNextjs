import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import "./globals.css";

async function getAllPosts() {
  const response = await fetch("http://localhost:3042/posts");
  if (!response.ok) {
    logger.error("Houve um problema ao tentar acessar os posts.");
  }
  logger.info("Posts obtidos com sucesso.");
  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className="grid">
      {posts.map((post) => (
        <CardPost post={post} key={post.id} />
      ))}
    </main>
  );
}

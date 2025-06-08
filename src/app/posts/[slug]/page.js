import logger from "@/logger";

async function getPostBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);
  if (!response.ok) {
    logger.error("Houve um problema ao tentar acessar os posts.");
    return {};
  }
  logger.info("Posts obtidos com sucesso.");
  const data = await response.json();
  if (data.length == 0) {
    return {};
  }
  return data[0];
}

const PagePost = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return <h1 className="text-amber-50">{`título do post: ${post.title}`}</h1>;
};

export default PagePost;

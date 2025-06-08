import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";

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

  const post = data[0];

  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}

const PagePost = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className="subtitle">Código:</h3>
      <div className="code">
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
};

export default PagePost;

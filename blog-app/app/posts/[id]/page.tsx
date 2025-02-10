import { notFound } from "next/navigation";

async function getPost(id: string) {
  // Simulação de busca no banco de dados ou API
  return { id, title: `Post ${id}`, content: "Conteúdo do post é..." };
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

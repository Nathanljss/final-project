import db from "../src/utils/utilities";

export default async function Post({ params }) {
  const post = (await db.query(`SELECT * FROM posts WHERE id = ${params.id};`))
    .rows;

  return (
    <>
      {post.map((post) => (
        <>
          <h2 key={post.id}>{post.title}</h2>
          <p>{post.content}</p>
        </>
      ))}
    </>
  );
}

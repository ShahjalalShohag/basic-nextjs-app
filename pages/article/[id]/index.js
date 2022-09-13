import React from "react";
import { server } from "../../../config";
import { useRouter } from "next/router";

const article = ({ article }) => {
  console.log(article.id);
  const router = useRouter();
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <button onClick={() => router.push("/")}>Go Back</button>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    paths: articles.map((article) => ({
      params: { id: article.id.toString() },
    })),
    fallback: false,
  };
};

export default article;

import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { server } from "../config";
export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Main page</title>
        <meta name="keywords" content="nextjs web dev" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  console.log("fetching data");
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: { articles },
  };
};

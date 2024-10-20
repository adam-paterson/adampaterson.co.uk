import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../src/components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Article {
  title: string;
  date: string;
  slug: string;
}

interface ArticlesProps {
  articles: Article[];
}

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Articles - Your Name</title>
        <meta name="description" content="Articles by Your Name." />
      </Head>
      <Navbar />
      <main className="container mx-auto mt-20 p-4">
        <h1 className="text-3xl font-bold mb-4">Articles</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.slug} className="mb-2">
              <a
                href={`/articles/${article.slug}`}
                className="text-blue-600 hover:underline"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-600">{article.date}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("content", "articles"));

  const articles = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "articles", filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);

    return {
      title: data.title,
      date: data.date,
      slug,
    };
  });

  return {
    props: {
      articles,
    },
  };
};

export default Articles;

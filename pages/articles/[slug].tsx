import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface ArticleProps {
  title: string;
  date: string;
  content: string;
}

const Article: NextPage<ArticleProps> = ({ title, date, content }) => {
  return (
    <>
      <Head>
        <title>{title} - Your Name</title>
        <meta name="description" content={title} />
      </Head>
      <Navbar />
      <main className="container mx-auto mt-20 p-4">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-gray-600 mb-4">{date}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("content", "articles"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content", "articles", `${params.slug}.md`),
    "utf-8"
  );
  const { data, content } = matter(markdownWithMeta);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: data.title,
      date: data.date,
      content: contentHtml,
    },
  };
};

export default Article;

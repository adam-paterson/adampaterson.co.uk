import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../src/components/Footer";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Your Name</title>
        <meta name="description" content="Projects by Your Name." />
      </Head>
      <Navbar />
      <main className="container mx-auto mt-20 p-4">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        {/* List your projects here */}
      </main>
      <Footer />
    </>
  );
};

export default Projects;

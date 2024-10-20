import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Your Name</title>
        <meta name="description" content="About Your Name." />
      </Head>
      <Navbar />
      <main className="container mx-auto mt-20 p-4">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p>[Your bio goes here...]</p>
      </main>
      <Footer />
    </>
  );
};

export default About;

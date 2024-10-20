import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Name - Home</title>
        <meta name="description" content="Personal website of Your Name." />
      </Head>
      <Navbar />
      <main className="container mx-auto mt-20 p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Your Name</h1>
          <p className="text-lg">UX Director, Manager, Podcaster, Developer.</p>
        </section>
        {/* Add more sections as needed */}
      </main>
      <Footer />
    </>
  );
};

export default Home;

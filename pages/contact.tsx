import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../src/components/Footer";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Your Name</title>
        <meta name="description" content="Contact Your Name." />
      </Head>
      <Navbar />
      <main className="container mx-auto mt-20 p-4">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border p-2"
              rows={5}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

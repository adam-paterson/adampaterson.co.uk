import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <a className="text-2xl font-bold">YourName</a>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/articles">
            <a>Articles</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link href="/about">
            <a className="block px-4 py-2">About</a>
          </Link>
          <Link href="/projects">
            <a className="block px-4 py-2">Projects</a>
          </Link>
          <Link href="/articles">
            <a className="block px-4 py-2">Articles</a>
          </Link>
          <Link href="/contact">
            <a className="block px-4 py-2">Contact</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

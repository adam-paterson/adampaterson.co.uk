import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} Adam Paterson. All rights reserved.
      </div>
      <div className="flex justify-center py-4">
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;

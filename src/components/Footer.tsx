import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-off-white dark:bg-dark-bg text-not-quite-black dark:text-white py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-2 md:mb-0">
            © {new Date().getFullYear()} Adam Paterson. All rights reserved.
          </div>
          <div className="text-sm mb-2 md:mb-0">
            Email me at{" "}
            <a
              href="mailto:hello@adampaterson.co.uk"
              className="text-highlight dark:text-dark-highlight hover:underline"
            >
              hello@adampaterson.co.uk
            </a>
          </div>
          <div className="mb-2 md:mb-0">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

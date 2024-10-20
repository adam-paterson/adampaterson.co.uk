import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/adam-paterson", icon: FaGithub },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adam-paterson",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/adam_paterson",
    icon: FaTwitter,
  },
  { name: "Medium", url: "https://medium.com/@adam_paterson", icon: FaMedium },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-600 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
          aria-label={link.name}
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

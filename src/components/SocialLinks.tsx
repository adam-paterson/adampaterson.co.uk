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
    name: "X / Twitter",
    url: "https://x.com/adampaterson",
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
          className="rounded-xs border p-2 transition-colors duration-200"
          style={{ color: "var(--color-muted)", borderColor: "var(--color-line)" }}
          aria-label={link.name}
        >
          <link.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

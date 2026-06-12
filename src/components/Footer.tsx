import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mono-label">Adam Paterson</div>
          <div className="mt-1 text-sm" style={{ color: "var(--color-muted)" }}>
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
        <a
          href="mailto:hello@adampaterson.co.uk"
          className="link-underline text-sm"
        >
          hello@adampaterson.co.uk
        </a>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;

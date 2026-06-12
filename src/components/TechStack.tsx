import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiVuedotjs, SiPhp, SiPython, SiAmazon, 
  SiGooglecloud, SiDocker, SiKubernetes, SiShopify,
  SiMagento, SiLaravel, SiSymfony, SiJavascript,
  SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs,
  SiMysql, SiPostgresql, SiMongodb, SiRedis,
  SiPytorch, SiTensorflow, SiOpenai,
  SiMicrosoft,
  SiBigcommerce,
  SiRuby,
  SiZend,
  SiTerraform
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ElementType;
}

interface StackGroup {
  name: string;
  summary: string;
  items: TechItem[];
}

const stackGroups: StackGroup[] = [
  {
    name: "AI and ML",
    summary: "LLM applications, evaluation loops, and model-assisted workflows.",
    items: [
      { name: "Python", icon: SiPython },
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "OpenAI", icon: SiOpenai },
      { name: "AutoGen", icon: SiMicrosoft },
    ]
  },
  {
    name: "Frontend",
    summary: "Typed interfaces, content-led pages, and design-system implementation.",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TailwindCSS", icon: SiTailwindcss },
    ]
  },
  {
    name: "Backend",
    summary: "Commerce platforms, APIs, persistence, and integration layers.",
    items: [
      { name: "PHP", icon: SiPhp },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Laravel", icon: SiLaravel },
      { name: "Symfony", icon: SiSymfony },
      { name: "Ruby", icon: SiRuby },
      { name: "Zend", icon: SiZend },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ]
  },
  {
    name: "Infrastructure",
    summary: "Cloud deployments, containerisation, and repeatable platform foundations.",
    items: [
      { name: "AWS", icon: SiAmazon },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
    ]
  },
  {
    name: "E-commerce",
    summary: "Discovery, implementation, and optimisation across established platforms.",
    items: [
      { name: "Shopify", icon: SiShopify },
      { name: "Adobe Commerce", icon: SiMagento },
      { name: "BigCommerce", icon: SiBigcommerce },
    ]
  }
];

const TechStack: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState(stackGroups[0].name);

  return (
    <section className="border-t py-24 hairline sm:py-32">
      <div className="section-shell">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.65fr,1fr] lg:items-end">
          <div>
            <p className="section-kicker">Technology</p>
            <h2 className="section-title">A stack chosen for maintainability, not novelty.</h2>
          </div>
          <p className="section-copy">
            The common thread is pragmatic delivery: typed interfaces, proven commerce platforms, cloud foundations, and AI tools that make workflows more useful.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {stackGroups.map((group) => (
            <motion.article
              key={group.name}
              onMouseEnter={() => setActiveGroup(group.name)}
              onFocus={() => setActiveGroup(group.name)}
              tabIndex={0}
              className="technical-panel flex min-h-[22rem] flex-col"
              animate={{ opacity: activeGroup === group.name ? 1 : 0.74 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6 border-b pb-4 hairline">
                <span className="mono-label">{group.name}</span>
                <p className="mt-3 text-sm leading-6" style={{ color: "var(--color-muted)" }}>
                  {group.summary}
                </p>
              </div>

              <div className="mt-auto grid gap-2">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex min-h-12 items-center gap-3 rounded-sm border p-3"
                    style={{
                      borderColor: "var(--color-line)",
                      background: activeGroup === group.name ? "var(--color-signal-soft)" : "transparent",
                    }}
                    title={tech.name}
                  >
                    <tech.icon className="h-5 w-5 shrink-0" style={{ color: "var(--color-ink)" }} />
                    <span className="min-w-0 text-[0.7rem] leading-4" style={{ color: "var(--color-muted)" }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

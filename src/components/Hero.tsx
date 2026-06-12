import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  roles?: string[];
}

const signals = [
  "AI workflow design",
  "Commerce architecture",
  "Technical discovery",
  "Delivery leadership",
];

const systemSteps = [
  { label: "01", title: "Frame", detail: "Define the real workflow and constraints." },
  { label: "02", title: "Model", detail: "Map actors, data, risks, and feedback loops." },
  { label: "03", title: "Build", detail: "Prototype against measurable user value." },
  { label: "04", title: "Operate", detail: "Instrument, review, and improve in production." },
];

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative isolate overflow-hidden border-b hairline">
      <div className="absolute inset-0 -z-10 technical-grid opacity-40" />
      <div className="absolute left-1/2 top-0 -z-10 h-72 w-px bg-[var(--color-line-strong)]" />

      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.21, 0.45, 0.27, 0.9] }}
        className="section-shell grid min-h-[calc(100vh-4rem)] gap-14 py-24 sm:py-28 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center"
      >
        <div>
          <p className="section-kicker">Adam Paterson / AI Systems Engineer</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Practical AI systems that teams can understand, ship, and operate.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 sm:text-xl" style={{ color: "var(--color-muted)" }}>
            I design agent workflows, commerce platforms, and technical strategies for teams that need clarity as much as capability.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {signals.map((signal) => (
              <span key={signal} className="system-pill">
                {signal}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <motion.a href="#services" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="btn-primary">
              View Work Areas
            </motion.a>
            <motion.a href="mailto:hello@adampaterson.co.uk" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="btn-secondary">
              Start a Conversation
            </motion.a>
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="technical-panel-strong"
          aria-label="System design operating model"
        >
          <div className="mb-6 flex items-center justify-between border-b pb-4 hairline">
            <span className="mono-label">Operating Model</span>
            <span className="h-2 w-2 rounded-full bg-[var(--color-signal)]" />
          </div>

          <div className="space-y-4">
            {systemSteps.map((step, index) => (
              <div key={step.label} className="relative grid grid-cols-[3rem,1fr] gap-4">
                {index < systemSteps.length - 1 && (
                  <span className="absolute left-6 top-10 h-10 w-px bg-[var(--color-line)]" />
                )}
                <span className="flex h-12 w-12 items-center justify-center rounded-sm border font-mono text-xs" style={{ borderColor: "var(--color-line-strong)", color: "var(--color-signal)" }}>
                  {step.label}
                </span>
                <div>
                  <h2 className="text-base font-semibold">{step.title}</h2>
                  <p className="mt-1 text-sm leading-6" style={{ color: "var(--color-muted)" }}>
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-5 hairline">
            <div className="mono-label mb-3">Output</div>
            <p className="text-sm leading-6" style={{ color: "var(--color-muted)" }}>
              A route from ambiguity to production: assumptions named, risks visible, and delivery steps sequenced.
            </p>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
};

export default Hero;

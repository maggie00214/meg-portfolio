"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowSquareOut, ArrowsClockwise, Plugs, Printer } from "@phosphor-icons/react";

const projects = [
  {
    id: "n8n-workflow",
    title: "n8n Workflow Automation",
    description:
      "Designed and built an automated multi-step data workflow using n8n. Replaced a repetitive manual process with a triggered pipeline. Built from scratch with Codex as the build partner.",
    tags: ["n8n", "Automation", "Codex"],
    Icon: ArrowsClockwise,
    featured: true,
    accent: "blue",
  },
  {
    id: "wp-logistics",
    title: "WordPress Logistics Plugin",
    description:
      "A WordPress plugin that embeds real-time shipment tracking in the admin panel. Zero prior PHP experience. Codex wrote the code, I directed the logic.",
    tags: ["WordPress", "PHP", "Codex"],
    Icon: Plugs,
    featured: false,
    accent: "zinc",
  },
  {
    id: "chrome-print",
    title: "Chrome Batch Print Extension",
    description:
      "Chrome extension that batches multiple web pages into a single print job. Cuts click-work from several minutes to seconds.",
    tags: ["Chrome Extension", "JavaScript", "Codex"],
    Icon: Printer,
    featured: false,
    accent: "zinc",
  },
] as const;

function ProjectTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
      {label}
    </span>
  );
}

function FeaturedCard({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: number;
}) {
  const reduce = useReducedMotion();
  const { title, description, tags, Icon } = project;

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/20 border border-blue-100 dark:border-blue-900/40 p-8 md:p-10 flex flex-col gap-6 group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/40 w-fit">
          <Icon
            size={22}
            weight="duotone"
            className="text-blue-600 dark:text-blue-400"
          />
        </div>
        <ArrowSquareOut
          size={18}
          className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity mt-1 shrink-0"
        />
      </div>

      <div className="flex-1 space-y-3">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h3>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[52ch]">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <ProjectTag key={tag} label={tag} />
        ))}
      </div>
    </motion.article>
  );
}

function SmallCard({
  project,
  delay,
}: {
  project: (typeof projects)[number];
  delay: number;
}) {
  const reduce = useReducedMotion();
  const { title, description, tags, Icon } = project;

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/50 p-7 flex flex-col gap-5 group flex-1"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="p-2.5 rounded-xl bg-zinc-200/80 dark:bg-zinc-700/60 w-fit">
          <Icon
            size={20}
            weight="duotone"
            className="text-zinc-600 dark:text-zinc-400"
          />
        </div>
        <ArrowSquareOut
          size={16}
          className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5 shrink-0"
        />
      </div>

      <div className="flex-1 space-y-2.5">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <ProjectTag key={tag} label={tag} />
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-12">
          Projects
        </h2>

        {/* Layout: featured spans 2 cols, two smaller stack on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <FeaturedCard project={projects[0]} delay={0} />

          <div className="flex flex-col gap-4">
            <SmallCard project={projects[1]} delay={0.1} />
            <SmallCard project={projects[2]} delay={0.2} />
          </div>
        </div>
      </div>
    </section>
  );
}

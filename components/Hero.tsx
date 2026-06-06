"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

export default function Hero() {
  const reduce = useReducedMotion();

  function fadeUp(delay: number) {
    if (reduce) return {};
    return {
      initial: { opacity: 0, y: 28 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
    };
  }

  return (
    <section id="home" className="min-h-[100dvh] flex flex-col justify-center pt-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Asymmetric: content left (60%), rest is intentional whitespace */}
        <div className="max-w-2xl py-20 lg:py-0">

          {/* Name label */}
          <motion.p
            {...fadeUp(0.1)}
            className="font-mono text-xs tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-7 uppercase"
          >
            林汶 Meg Lin
          </motion.p>

          {/* Headline — max 2 lines, 1 here */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-zinc-900 dark:text-zinc-50 mb-6"
          >
            Shipping with AI.
          </motion.h1>

          {/* Subtext — 14 words, under 20-word cap */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[46ch] mb-10"
          >
            Career changer. Three real projects built with Codex. Looking for my first AI role.
          </motion.p>

          {/* Single CTA */}
          <motion.div {...fadeUp(0.4)}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 active:scale-[0.98] transition-all duration-200"
            >
              See Projects
              <ArrowRight size={15} weight="bold" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

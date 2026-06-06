import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Let's work together.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 text-base leading-relaxed">
            Open to full-time AI roles, contracts, and interesting projects. Currently based in Taiwan.
          </p>

          <a
            href="mailto:maggie00215@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200"
          >
            maggie00215@gmail.com
            <ArrowRight size={15} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}

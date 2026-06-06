export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric: content in left 55%, right side breathes */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
            From zero to shipping.
          </h2>

          <div className="space-y-5 text-zinc-500 dark:text-zinc-400 leading-relaxed text-base">
            <p>
              No CS degree. No boot camp. Just a question: what can I build if I have the right tools?
            </p>
            <p>
              I took that question to Codex. Since then: a workflow automation in n8n, a WordPress plugin for logistics tracking, a Chrome extension for batch printing. None of them from a tutorial.
            </p>
            <p>
              I want to work somewhere that uses AI to build things that matter. I bring fresh eyes, fast iteration, and a habit of shipping.
            </p>
          </div>

          {/* Skills row */}
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Codex",
              "n8n",
              "WordPress",
              "Chrome Extensions",
              "JavaScript",
              "Prompt Engineering",
              "Workflow Design",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// z-index: 50 — top layer
export default function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 tracking-tight">
          Meg Lin
        </span>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150"
          >
            Contact
          </a>
        </div>

        {/* Available badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
            Open to work
          </span>
        </div>
      </div>
    </nav>
  );
}

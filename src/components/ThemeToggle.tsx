import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  dark: boolean;
  onToggle: () => void;
};

export default function ThemeToggle({
  dark,
  onToggle,
}: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
    >
      {dark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}

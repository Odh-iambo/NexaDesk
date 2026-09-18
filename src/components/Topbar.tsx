import { Bell, Menu, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

type TopbarProps = {
  onMenuClick: () => void;
  dark: boolean;
  onToggleTheme: () => void;
};

export default function Topbar({
  onMenuClick,
  dark,
  onToggleTheme,
}: TopbarProps) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <div>
          <p className="hidden text-sm text-slate-400 sm:block">
            Friday, September 18, 2026
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
            Good morning, Samuel 👋
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-800 md:flex">
          <Search size={17} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-40 bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        <ThemeToggle dark={dark} onToggle={onToggleTheme} />

        <button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900" />
        </button>

        <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white dark:bg-white dark:text-slate-900 sm:flex">
          SO
        </div>
      </div>
    </header>
  );
}
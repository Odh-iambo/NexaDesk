import {
  ArrowUpRight,
  CalendarDays,
  Download,
  TrendingUp,
} from "lucide-react";
import Stats from "./Stats";
import TicketTable from "./TicketTable";
import Activity from "./Activity";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">
            Overview
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Support dashboard
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
            Monitor support requests, team activity, and customer issues from
            one place.
          </p>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
            <CalendarDays size={16} />
            This month
          </button>

          <button className="hidden items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 dark:bg-white dark:text-slate-900 sm:flex">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      <Stats />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <TicketTable compact />
        <Activity />
      </div>

      <div className="overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-sm dark:bg-slate-800 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-400">
              <TrendingUp size={16} />
              Team performance
            </p>

            <h2 className="mt-2 text-xl font-bold sm:text-2xl">
              Support resolution is up this month
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Your team has resolved more requests while keeping response
              times under control.
            </p>
          </div>

          <button className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100">
            View analytics
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
import {
  CheckCircle2,
  Clock3,
  Ticket as TicketIcon,
} from "lucide-react";
import TicketTable, { tickets } from "./TicketTable";

export default function Tickets() {
  const open = tickets.filter((t) => t.status === "Open").length;
  const progress = tickets.filter((t) => t.status === "In Progress").length;
  const resolved = tickets.filter((t) => t.status === "Resolved").length;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-slate-400">
          Workspace
        </p>

        <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Tickets
        </h1>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Manage incoming requests and keep your support queue organized.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <TicketIcon className="text-blue-500" size={21} />
            <span className="text-sm text-slate-500">Open</span>
          </div>

          <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            {open}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <Clock3 className="text-amber-500" size={21} />
            <span className="text-sm text-slate-500">
              In progress
            </span>
          </div>

          <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            {progress}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-emerald-500" size={21} />
            <span className="text-sm text-slate-500">
              Resolved
            </span>
          </div>

          <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            {resolved}
          </p>
        </div>
      </div>

      <TicketTable />
    </div>
  );
}

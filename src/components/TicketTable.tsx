import { MoreHorizontal, Plus, Search } from "lucide-react";
import { useState } from "react";

export const tickets = [
  {
    id: "#1042",
    title: "Laptop disconnecting from Wi-Fi",
    customer: "Brian Otieno",
    email: "brian@example.com",
    priority: "High",
    status: "Open",
    date: "Sep 18, 2026",
    initials: "BO",
  },
  {
    id: "#1041",
    title: "Unable to access company email",
    customer: "Grace Wanjiku",
    email: "grace@example.com",
    priority: "Medium",
    status: "In Progress",
    date: "Sep 18, 2026",
    initials: "GW",
  },
  {
    id: "#1040",
    title: "Adobe license installation",
    customer: "Daniel Kimani",
    email: "daniel@example.com",
    priority: "Low",
    status: "Resolved",
    date: "Sep 17, 2026",
    initials: "DK",
  },
  {
    id: "#1039",
    title: "VPN connection keeps failing",
    customer: "Mercy Achieng",
    email: "mercy@example.com",
    priority: "High",
    status: "In Progress",
    date: "Sep 17, 2026",
    initials: "MA",
  },
  {
    id: "#1038",
    title: "Request for new monitor",
    customer: "Kevin Mwangi",
    email: "kevin@example.com",
    priority: "Low",
    status: "Open",
    date: "Sep 16, 2026",
    initials: "KM",
  },
];

const statusClasses: Record<string, string> = {
  Open: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
  "In Progress":
    "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
  Resolved:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
};

const priorityClasses: Record<string, string> = {
  High: "text-red-600 dark:text-red-400",
  Medium: "text-amber-600 dark:text-amber-400",
  Low: "text-slate-500 dark:text-slate-400",
};

type TicketTableProps = {
  compact?: boolean;
};

export default function TicketTable({
  compact = false,
}: TicketTableProps) {
  const [search, setSearch] = useState("");

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.title.toLowerCase().includes(search.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(search.toLowerCase()) ||
      ticket.id.toLowerCase().includes(search.toLowerCase()),
  );

  const visibleTickets = compact
    ? filteredTickets.slice(0, 5)
    : filteredTickets;

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-4 border-b border-slate-100 p-5 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {compact ? "Recent tickets" : "All tickets"}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {compact
              ? "Track your latest support requests."
              : "Search and manage support requests."}
          </p>
        </div>

        <button
          onClick={() => alert("Create ticket form coming soon.")}
          className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          <Plus size={17} />
          New ticket
        </button>
      </div>

      <div className="border-b border-slate-100 p-4 dark:border-slate-800">
        <div className="flex max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800">
          <Search size={17} className="text-slate-400" />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search tickets..."
            className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-white"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/60">
            <tr className="text-xs uppercase tracking-wide text-slate-400">
              <th className="px-5 py-4 font-semibold">Ticket</th>
              <th className="px-5 py-4 font-semibold">Customer</th>
              <th className="px-5 py-4 font-semibold">Priority</th>
              <th className="px-5 py-4 font-semibold">Status</th>
              <th className="px-5 py-4 font-semibold">Date</th>
              <th className="px-5 py-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {visibleTickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40"
              >
                <td className="px-5 py-4">
                  <p className="text-sm font-bold text-slate-400">
                    {ticket.id}
                  </p>

                  <p className="mt-1 text-base font-semibold text-slate-800 dark:text-slate-200">
                    {ticket.title}
                  </p>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {ticket.initials}
                    </div>

                    <span className="text-base font-medium text-slate-700 dark:text-slate-300">
                      {ticket.customer}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`text-sm font-semibold ${priorityClasses[ticket.priority]}`}
                  >
                    {ticket.priority}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${statusClasses[ticket.status]}`}
                  >
                    {ticket.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-base text-slate-500">
                  {ticket.date}
                </td>

                <td className="px-5 py-4">
                  <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visibleTickets.length === 0 && (
        <div className="p-10 text-center text-sm text-slate-400">
          No tickets found.
        </div>
      )}
    </section>
  );
}
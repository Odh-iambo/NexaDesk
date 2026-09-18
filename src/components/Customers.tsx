import { Mail, MoreHorizontal, Phone, Search } from "lucide-react";
import { useState } from "react";

const customers = [
  {
    name: "Brian Otieno",
    email: "brian@example.com",
    phone: "+254 712 345 678",
    tickets: 8,
    status: "Active",
    initials: "BO",
  },
  {
    name: "Grace Wanjiku",
    email: "grace@example.com",
    phone: "+254 723 456 789",
    tickets: 5,
    status: "Active",
    initials: "GW",
  },
  {
    name: "Daniel Kimani",
    email: "daniel@example.com",
    phone: "+254 734 567 890",
    tickets: 3,
    status: "Active",
    initials: "DK",
  },
  {
    name: "Mercy Achieng",
    email: "mercy@example.com",
    phone: "+254 745 678 901",
    tickets: 11,
    status: "Active",
    initials: "MA",
  },
  {
    name: "Kevin Mwangi",
    email: "kevin@example.com",
    phone: "+254 756 789 012",
    tickets: 2,
    status: "Inactive",
    initials: "KM",
  },
  {
    name: "Faith Njeri",
    email: "faith@example.com",
    phone: "+254 767 890 123",
    tickets: 7,
    status: "Active",
    initials: "FN",
  },
];

export default function Customers() {
  const [search, setSearch] = useState("");

  const filtered = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-slate-400">
          Workspace
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Customers
        </h1>

        <p className="mt-2 text-base leading-6 text-slate-500 dark:text-slate-400">
          View customer information and support history.
        </p>
      </div>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-100 p-5 dark:border-slate-800">
          <div className="flex max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800">
            <Search size={17} className="text-slate-400" />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search customers..."
              className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-white"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/60">
              <tr className="text-xs uppercase tracking-wide text-slate-400">
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Contact</th>
                <th className="px-5 py-4">Tickets</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filtered.map((customer) => (
                <tr
                  key={customer.email}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/40"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {customer.initials}
                      </div>

                      <div>
                        <p className="text-base font-semibold text-slate-800 dark:text-slate-200">
                          {customer.name}
                        </p>

                        <p className="text-xs text-slate-400">
                          Customer
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <div className="space-y-1 text-base text-slate-500">
                      <p className="flex items-center gap-2">
                        <Mail size={14} />
                        {customer.email}
                      </p>

                      <p className="flex items-center gap-2">
                        <Phone size={14} />
                        {customer.phone}
                      </p>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                      {customer.tickets}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        customer.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
                          : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

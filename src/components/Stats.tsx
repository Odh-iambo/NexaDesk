import {
  CheckCircle2,
  Clock3,
  CircleAlert,
  Ticket,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    label: "Open tickets",
    value: "24",
    change: "+12.5%",
    icon: Ticket,
  },
  {
    label: "In progress",
    value: "11",
    change: "+4.2%",
    icon: Clock3,
  },
  {
    label: "Resolved",
    value: "87",
    change: "+18.7%",
    icon: CheckCircle2,
  },
  {
    label: "High priority",
    value: "6",
    change: "-8.1%",
    icon: CircleAlert,
  },
];

export default function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.label}
                </p>

                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-3 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <Icon size={20} />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1 font-semibold text-emerald-600">
                <TrendingUp size={13} />
                {stat.change}
              </span>

              <span className="text-slate-400">
                from last week
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
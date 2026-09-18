import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const weeklyData = [
  { day: "Mon", tickets: 18, resolved: 14 },
  { day: "Tue", tickets: 25, resolved: 19 },
  { day: "Wed", tickets: 21, resolved: 17 },
  { day: "Thu", tickets: 31, resolved: 25 },
  { day: "Fri", tickets: 27, resolved: 23 },
  { day: "Sat", tickets: 15, resolved: 12 },
  { day: "Sun", tickets: 11, resolved: 9 },
];

const categoryData = [
  { category: "Network", count: 38 },
  { category: "Software", count: 27 },
  { category: "Hardware", count: 19 },
  { category: "Accounts", count: 14 },
  { category: "Other", count: 9 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-slate-400">
          Insights
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Analytics
        </h1>

        <p className="mt-2 text-base leading-6 text-slate-500 dark:text-slate-400">
          Understand ticket volume, resolution performance, and support trends.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500">Resolution rate</p>
          <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            86.4%
          </p>
          <p className="mt-2 text-xs font-semibold text-emerald-600">
            +6.2% this month
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500">Avg. response</p>
          <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            18m
          </p>
          <p className="mt-2 text-xs font-semibold text-emerald-600">
            4m faster
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500">Customer satisfaction</p>
          <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            94%
          </p>
          <p className="mt-2 text-xs font-semibold text-emerald-600">
            +2.8% this month
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500">Total requests</p>
          <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            198
          </p>
          <p className="mt-2 text-xs font-semibold text-blue-600">
            Last 30 days
          </p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6">
            <h2 className="font-bold text-slate-900 dark:text-white">
              Ticket volume
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Requests received versus resolved this week.
            </p>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient
                    id="ticketsGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#0f172a"
                      stopOpacity={0.18}
                    />
                    <stop
                      offset="95%"
                      stopColor="#0f172a"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="tickets"
                  stroke="#0f172a"
                  strokeWidth={2}
                  fill="url(#ticketsGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6">
            <h2 className="font-bold text-slate-900 dark:text-white">
              Tickets by category
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Most common support request types.
            </p>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} layout="vertical">
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#e2e8f0"
                />

                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />

                <YAxis
                  dataKey="category"
                  type="category"
                  width={70}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />

                <Tooltip />

                <Bar
                  dataKey="count"
                  fill="#0f172a"
                  radius={[0, 6, 6, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-bold text-slate-900 dark:text-white">
          Support performance
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-500">
                First response SLA
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                92%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-full w-[92%] rounded-full bg-slate-900 dark:bg-white" />
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-500">
                Resolution SLA
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                86%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-full w-[86%] rounded-full bg-slate-900 dark:bg-white" />
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-500">
                Customer satisfaction
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                94%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-full w-[94%] rounded-full bg-slate-900 dark:bg-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

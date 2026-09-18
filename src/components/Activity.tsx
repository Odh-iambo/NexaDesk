import {
  CheckCircle2,
  Clock3,
  MessageSquare,
  UserPlus,
} from "lucide-react";

const activity = [
  {
    icon: CheckCircle2,
    title: "Ticket #1037 was resolved",
    time: "12 minutes ago",
  },
  {
    icon: MessageSquare,
    title: "New reply on ticket #1041",
    time: "28 minutes ago",
  },
  {
    icon: UserPlus,
    title: "Brian Otieno created a ticket",
    time: "46 minutes ago",
  },
  {
    icon: Clock3,
    title: "Ticket #1039 moved to progress",
    time: "1 hour ago",
  },
];

export default function Activity() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Recent activity
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Latest updates from your support team.
        </p>
      </div>

      <div className="space-y-6">
        {activity.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <Icon size={17} />
              </div>

              <div>
                <p className="text-sm font-semibold leading-5 text-slate-700 dark:text-slate-200">
                  {item.title}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {item.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="mt-7 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
        View all activity
      </button>
    </section>
  );
}
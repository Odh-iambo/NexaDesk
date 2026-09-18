import {
  BarChart3,
  Bell,
  CircleHelp,
  FileText,
  Headphones,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
  X,
} from "lucide-react";

type Page = "dashboard" | "tickets" | "customers" | "analytics";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  page: Page;
  onNavigate: (page: Page) => void;
};

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard, page: "dashboard" as Page },
  { label: "Tickets", icon: FileText, page: "tickets" as Page },
  { label: "Customers", icon: Users, page: "customers" as Page },
  { label: "Analytics", icon: BarChart3, page: "analytics" as Page },
];

export default function Sidebar({
  open,
  onClose,
  page,
  onNavigate,
}: SidebarProps) {
  const navigate = (nextPage: Page) => {
    onNavigate(nextPage);
    onClose();
  };

  return (
    <>
      {open && (
        <button
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 dark:border-slate-800 dark:bg-slate-900 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              <Headphones size={21} />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                NexaDesk
              </h1>
              <p className="text-xs text-slate-400">
                Support workspace
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = page === item.page;

              return (
                <button
                  key={item.label}
                  onClick={() => navigate(item.page)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon size={19} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <p className="mb-3 mt-8 px-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Manage
          </p>

          <nav className="space-y-1">
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
              <Bell size={19} />
              Notifications
              <span className="ml-auto rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600">
                3
              </span>
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
              <Settings size={19} />
              Settings
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
              <CircleHelp size={19} />
              Help Center
            </button>
          </nav>
        </div>

        <div className="border-t border-slate-100 p-4 dark:border-slate-800">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-semibold text-slate-700 dark:bg-slate-700 dark:text-white">
              SO
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800 dark:text-white">
                Samuel Odh
              </p>
              <p className="truncate text-xs text-slate-400">
                Administrator
              </p>
            </div>

            <LogOut size={17} className="text-slate-400" />
          </div>
        </div>
      </aside>
    </>
  );
}
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Tickets from "./components/Tickets";
import Customers from "./components/Customers";
import Analytics from "./components/Analytics";

type Page = "dashboard" | "tickets" | "customers" | "analytics";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [page, setPage] = useState<Page>("dashboard");

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("nexadesk-theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);

    localStorage.setItem(
      "nexadesk-theme",
      dark ? "dark" : "light",
    );
  }, [dark]);

  const renderPage = () => {
    switch (page) {
      case "tickets":
        return <Tickets />;

      case "customers":
        return <Customers />;

      case "analytics":
        return <Analytics />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <div className="flex min-h-screen">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          page={page}
          onNavigate={setPage}
        />

        <div className="min-w-0 flex-1">
          <Topbar
            onMenuClick={() => setSidebarOpen(true)}
            dark={dark}
            onToggleTheme={() => setDark((current) => !current)}
          />

          <main className="mx-auto max-w-[1600px] p-4 sm:p-6 lg:p-8">
            {renderPage()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
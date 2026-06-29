import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Sparkles,
  BarChart3,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Loan Application", icon: FileText },
  { label: "Application Progress", icon: BarChart3 },
  { label: "My Documents", icon: FolderOpen },
  { label: "AI Decision Explanation", icon: Sparkles },
  { label: "Loan Status", icon: BarChart3 },
  { label: "Notifications", icon: Bell },
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
  { label: "Logout", icon: LogOut },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-slate-200 bg-white/80 px-5 py-6 backdrop-blur xl:flex">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
          S
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">SmartLoan AI</p>
          <p className="text-xs text-slate-500">Student Portal</p>
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-medium transition ${
                item.active
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-900">Need help?</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          Reach support for document issues or application guidance.
        </p>
      </div>
    </aside>
  );
}

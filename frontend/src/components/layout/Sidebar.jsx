import { Link, useLocation } from "react-router-dom";
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
  ShieldCheck,
  Users,
  GraduationCap,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const studentNavItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/student/dashboard" },
  { label: "Loan Application", icon: FileText, path: "/student/application" },
  { label: "Application Progress", icon: BarChart3, path: "/student/status" },
  { label: "My Documents", icon: FolderOpen, path: "/student/ocr-verification" },
  { label: "AI Decision Explanation", icon: Sparkles, path: "/student/ai-decision" },
  { label: "Notifications", icon: Bell, path: "/student/notifications" },
  { label: "Profile", icon: User, path: "/student/profile" },
  { label: "Settings", icon: Settings, path: "/student/settings" },
  { label: "Logout", icon: LogOut, path: "/" },
];

const officerNavItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/officer/dashboard" },
  { label: "Applications", icon: ClipboardList, path: "/officer/applications" },
  { label: "Application Details", icon: FileText, path: "/officer/application-details" },
  { label: "OCR Review", icon: ShieldCheck, path: "/officer/ocr-review" },
  { label: "Fraud Detection", icon: AlertTriangle, path: "/officer/fraud" },
  { label: "AI Recommendation", icon: Sparkles, path: "/officer/ai-recommendation" },
  { label: "Approve / Reject", icon: CheckCircle2, path: "/officer/approve-reject" },
  { label: "Reports", icon: BarChart3, path: "/officer/reports" },
  { label: "Notifications", icon: Bell, path: "/officer/notifications" },
  { label: "Profile", icon: User, path: "/officer/profile" },
  { label: "Logout", icon: LogOut, path: "/" },
];

const adminNavItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
  { label: "User Management", icon: Users, path: "/admin/users" },
  { label: "Student Management", icon: GraduationCap, path: "/admin/students" },
  { label: "Loan Officers", icon: ShieldCheck, path: "/admin/officers" },
  { label: "Analytics", icon: BarChart3, path: "/admin/analytics" },
  { label: "Reports", icon: FileText, path: "/admin/reports" },
  { label: "Audit Logs", icon: ClipboardList, path: "/admin/audit-logs" },
  { label: "System Settings", icon: Settings, path: "/admin/settings" },
  { label: "Notifications", icon: Bell, path: "/admin/notifications" },
  { label: "Profile", icon: User, path: "/admin/profile" },
  { label: "Logout", icon: LogOut, path: "/" },
];

const navMap = {
  student: studentNavItems,
  officer: officerNavItems,
  admin: adminNavItems,
};

export default function Sidebar({ role = "student" }) {
  const location = useLocation();
  const navItems = navMap[role] ?? studentNavItems;

  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-slate-200 bg-white/80 px-5 py-6 backdrop-blur xl:flex">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
          S
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">SmartLoan AI</p>
          <p className="text-xs text-slate-500">{role === "officer" ? "Officer Portal" : role === "admin" ? "Admin Portal" : "Student Portal"}</p>
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-medium transition ${
                active
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-900">Need help?</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {role === "officer"
            ? "Review applications and manage risk with confidence."
            : role === "admin"
              ? "Monitor the platform and manage institutional workflows."
              : "Reach support for document issues or application guidance."}
        </p>
      </div>
    </aside>
  );
}

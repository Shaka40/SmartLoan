import { FilePlus2, FolderUp, BarChart3, Download, Sparkles, UserRound } from "lucide-react";

const actions = [
  { label: "Apply for Loan", icon: FilePlus2 },
  { label: "Upload Documents", icon: FolderUp },
  { label: "Track Application", icon: BarChart3 },
  { label: "Download Report", icon: Download },
  { label: "View AI Explanation", icon: Sparkles },
  { label: "Update Profile", icon: UserRound },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Quick Actions</h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white"
            >
              <div className="rounded-xl bg-slate-900 p-2 text-white">
                <Icon className="h-4 w-4" />
              </div>
              {action.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

import { Bell, Filter, Search, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const notifications = [
  {
    title: "Application update",
    detail: "Your submission moved to OCR verification.",
    time: "5 min ago",
    unread: true,
    tone: "blue",
  },
  {
    title: "Document request",
    detail: "Please upload your parent income letter before the next review window.",
    time: "1 hour ago",
    unread: true,
    tone: "amber",
  },
  {
    title: "Approval notice",
    detail: "Your profile has been marked as complete for officer review.",
    time: "Yesterday",
    unread: false,
    tone: "emerald",
  },
];

export default function NotificationsPage() {
  return (
    <PageShell
      title="Notifications"
      description="Stay informed about document requests, application updates, and important system messages."
      badge={<><Bell className="h-4 w-4" /> Activity center</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-900 p-2 text-white">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Message center</h2>
              <p className="text-sm text-slate-500">Unread notifications are highlighted for quick follow-up.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
              <Search className="h-4 w-4" />
              <input placeholder="Search" className="w-32 border-none bg-transparent outline-none" />
            </label>
            <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {notifications.map((item) => {
            const toneClasses = item.tone === "blue"
              ? "border-blue-200 bg-blue-50 text-blue-700"
              : item.tone === "amber"
                ? "border-amber-200 bg-amber-50 text-amber-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700";
            return (
              <div key={item.title} className="flex items-start justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex gap-3">
                  <div className={`rounded-2xl border p-2 ${toneClasses}`}>
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-400">{item.time}</span>
                  {item.unread ? <span className="h-2.5 w-2.5 rounded-full bg-rose-500" /> : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}

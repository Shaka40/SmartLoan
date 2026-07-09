import { Bell, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const notifications = [
  { title: "Officer review backlog", detail: "12 applications await final approval." },
  { title: "System maintenance", detail: "A scheduled maintenance window is planned for Friday." },
  { title: "New student registrations", detail: "24 students completed onboarding today." },
];

export default function AdminNotificationsPage() {
  return (
    <PageShell
      title="Notifications"
      description="Monitor internal alerts and operational updates from the admin dashboard."
      badge={<><Bell className="h-4 w-4" /> Admin alerts</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="space-y-3">
          {notifications.map((item) => (
            <div key={item.title} className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="rounded-2xl bg-slate-900 p-2 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

import { Bell, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const notifications = [
  { title: "New application assigned", detail: "A new student application is ready for your review." },
  { title: "Document clarification request", detail: "One applicant has submitted a follow-up document." },
  { title: "Fraud review reminder", detail: "A flagged case requires your attention today." },
];

export default function OfficerNotificationsPage() {
  return (
    <PageShell
      role="officer"
      title="Notifications"
      description="Stay aware of urgent officers tasks, application assignments, and review reminders."
      badge={<><Bell className="h-4 w-4" /> Officer alerts</>}
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

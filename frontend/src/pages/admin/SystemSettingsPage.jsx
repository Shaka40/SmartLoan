import { Settings, ShieldCheck, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const settings = [
  { title: "Eligibility thresholds", detail: "Adjust approval sensitivity and AI confidence bands." },
  { title: "Fraud detection rules", detail: "Update risk logic used in automated review." },
  { title: "Notification templates", detail: "Manage communication sent to students and officers." },
];

export default function SystemSettingsPage() {
  return (
    <PageShell
      role="admin"
      title="System Settings"
      description="Configure core platform behavior and maintain control over the review environment."
      badge={<><Settings className="h-4 w-4" /> Platform configuration</>}
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-4">
            {settings.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-2">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Security posture</h3>
              <p className="text-sm text-slate-300">Operational checks for safe administration.</p>
            </div>
          </div>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-4">
            <p className="text-sm text-slate-300">Administrator access is restricted to verified roles and protected by audit logging.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

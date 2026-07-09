import { AlertTriangle, BadgeCheck, FileText, Users, ShieldCheck, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const metrics = [
  { label: "Pending Reviews", value: "24", tone: "blue" },
  { label: "Fraud Flags", value: "6", tone: "rose" },
  { label: "Approved Today", value: "18", tone: "emerald" },
];

const queue = [
  { name: "Musa Juma", programme: "Computer Science", risk: "Low", status: "Needs review" },
  { name: "Asha Hamis", programme: "Business Studies", risk: "Medium", status: "OCR verified" },
  { name: "Khalid Rashid", programme: "Engineering", risk: "High", status: "Fraud flagged" },
];

export default function OfficerDashboard() {
  return (
    <PageShell
      title="Loan Officer Dashboard"
      description="Review student applications, inspect AI recommendations, and make final decisions with confidence."
      badge={<><ShieldCheck className="h-4 w-4" /> Officer workspace</>}
    >
      <section className="grid gap-4 md:grid-cols-3">
        {metrics.map((item) => (
          <div key={item.label} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Application Queue</h2>
              <p className="mt-2 text-sm text-slate-500">The latest student applications waiting for officer review.</p>
            </div>
            <button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Review all</button>
          </div>

          <div className="mt-6 space-y-3">
            {queue.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.programme}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-700">{item.status}</p>
                  <p className="mt-1 text-sm text-slate-500">Risk: {item.risk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-2">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">AI Recommendation</h3>
                <p className="text-sm text-slate-300">Suggested action for the current review queue.</p>
              </div>
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm text-slate-300">Recommended outcome</p>
              <p className="mt-2 text-2xl font-semibold">Approve with caution</p>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-amber-50 p-2 text-amber-700">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Risk Alerts</h3>
                <p className="text-sm text-slate-500">Applications that need special attention.</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <BadgeCheck className="h-4 w-4 text-emerald-600" />
                <span className="text-sm text-slate-600">3 applications matched expected income patterns.</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <FileText className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-slate-600">2 documents require manual confirmation.</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <Users className="h-4 w-4 text-rose-600" />
                <span className="text-sm text-slate-600">1 application is flagged for secondary verification.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

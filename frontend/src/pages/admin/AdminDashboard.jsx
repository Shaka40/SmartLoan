import { BarChart3, ShieldCheck, Users, FileText, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const stats = [
  { label: "Total Students", value: "1,240" },
  { label: "Active Officers", value: "24" },
  { label: "Approvals This Month", value: "318" },
];

export default function AdminDashboard() {
  return (
    <PageShell
      role="admin"
      title="Admin Dashboard"
      description="Monitor platform activity, manage roles, and oversee institutional performance."
      badge={<><ShieldCheck className="h-4 w-4" /> Admin control center</>}
    >
      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-900 p-2 text-white">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">System Analytics</h2>
              <p className="text-sm text-slate-500">A high-level look at student and officer activity.</p>
            </div>
          </div>
          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Approval conversion</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">82%</p>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-2">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Platform alerts</h3>
              <p className="text-sm text-slate-300">Important operational signals for admins.</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3">12 officers need training refreshers</div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3">4 reports are pending export</div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

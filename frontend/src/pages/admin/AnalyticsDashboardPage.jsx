import { BarChart3, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

export default function AnalyticsDashboardPage() {
  return (
    <PageShell
      title="Analytics Dashboard"
      description="Track approval trends, system demand, and regional performance insights."
      badge={<><BarChart3 className="h-4 w-4" /> Insight portal</>}
    >
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Monthly approvals</h2>
          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Trend overview</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">+18% this quarter</p>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-2">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Highlights</h3>
              <p className="text-sm text-slate-300">Key insights for institutional reporting.</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3">Highest demand from Dar es Salaam</div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3">Student completion rate is improving</div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

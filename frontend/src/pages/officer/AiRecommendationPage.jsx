import { Brain, Sparkles, TrendingUp } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

export default function AiRecommendationPage() {
  return (
    <PageShell
      title="AI Recommendation"
      description="View the final AI assessment and support your review with transparent insights."
      badge={<><Brain className="h-4 w-4" /> AI support</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">Assessment summary</h2>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Eligibility</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">Eligible</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Confidence</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">95%</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Suggested allocation</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">TZS 3,000,000</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-2">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Reasoning summary</h3>
                <p className="text-sm text-slate-300">Transparent explanation for the officer review.</p>
              </div>
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm leading-7 text-slate-200">
                The applicant demonstrates meaningful academic progress and financial need, and the supporting documentation is largely consistent. The system recommends approval with standard monitoring.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-emerald-300">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Ready for officer decision</span>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

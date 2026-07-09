import { ArrowDownToLine, BarChart3, Brain, CircleDollarSign, TrendingUp } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const factors = [
  { label: "Financial need", value: 32, color: "bg-slate-900" },
  { label: "Academic performance", value: 28, color: "bg-blue-600" },
  { label: "Household stability", value: 20, color: "bg-emerald-600" },
  { label: "Document quality", value: 20, color: "bg-amber-500" },
];

export default function AiDecisionExplanationPage() {
  return (
    <PageShell
      title="AI Decision Explanation"
      description="Understand how the system estimated your eligibility and why it produced this recommendation."
      badge={<><Brain className="h-4 w-4" /> Explainable AI</>}
      rightAction={
        <button className="flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
          <ArrowDownToLine className="h-4 w-4" />
          Download AI Report
        </button>
      }
    >
      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Eligibility</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">Eligible</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Neediness Score</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">84/100</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Confidence</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">96%</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Estimated Allocation</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">TZS 3,200,000</p>
              </div>
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                <CircleDollarSign className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900">Main contributing factors</h3>
            <div className="mt-4 space-y-4">
              {factors.map((factor) => (
                <div key={factor.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>{factor.label}</span>
                    <span>{factor.value}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-100">
                    <div className={`h-2.5 rounded-full ${factor.color}`} style={{ width: `${factor.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-2">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Decision explanation</h2>
              <p className="text-sm text-slate-300">A transparent summary of the model’s reasoning.</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-5">
            <p className="text-sm leading-7 text-slate-200">
              The model identified strong academic performance, a high demonstrated need, and a stable household profile as the largest contributors to your eligibility. The decision confidence remains high because the supporting documents and profile information are consistent.
            </p>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-5">
            <div className="flex items-center gap-2 text-emerald-300">
              <TrendingUp className="h-5 w-5" />
              <p className="font-semibold">Recommended next action</p>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Continue with the document verification step and keep your profile updated. The model recommends forwarding your application for officer review.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

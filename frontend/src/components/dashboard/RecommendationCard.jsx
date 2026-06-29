import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const factors = [
  { label: "Low family income", value: "+35%" },
  { label: "High GPA", value: "+25%" },
  { label: "Orphan status", value: "+20%" },
  { label: "Large family size", value: "+20%" },
];

export default function RecommendationCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-white shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-300">AI Decision Explanation</p>
          <h3 className="mt-2 text-xl font-semibold">Eligible for Priority Review</h3>
        </div>
        <div className="rounded-2xl bg-white/10 p-2">
          <Sparkles className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-2xl font-semibold text-emerald-300">
              94%
            </div>
            <div>
              <p className="text-sm text-slate-300">Eligibility</p>
              <p className="text-2xl font-semibold">Eligible</p>
              <p className="text-sm text-slate-300">Confidence score based on your academic and financial profile.</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4">
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>Neediness score</span>
              <span className="font-semibold">91/100</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-2 w-[91%] rounded-full bg-emerald-400" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
          <p className="text-sm font-medium text-slate-200">Top factors</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {factors.map((factor) => (
              <li key={factor.label} className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  {factor.label}
                </span>
                <span className="font-medium text-white">{factor.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
        View Full Explanation
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

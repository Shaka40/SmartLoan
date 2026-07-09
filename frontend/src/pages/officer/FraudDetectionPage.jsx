import { AlertTriangle, ShieldCheck, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const fraudFindings = [
  { label: "Behavioral anomaly", value: "Medium" },
  { label: "Duplicate applicant record", value: "High" },
  { label: "Income consistency", value: "Low" },
];

export default function FraudDetectionPage() {
  return (
    <PageShell
      role="officer"
      title="Fraud Detection Results"
      description="Inspect fraud risk indicators to support a safe and equitable review process."
      badge={<><ShieldCheck className="h-4 w-4" /> Risk analysis</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-amber-100 p-2 text-amber-700">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Potential risk flagged</h2>
              <p className="text-sm text-slate-600">One submission requires deeper investigation before final approval.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {fraudFindings.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-900 p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-2">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Officer conclusion</h3>
              <p className="text-sm text-slate-300">Proceed with caution and request one additional document for confirmation.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

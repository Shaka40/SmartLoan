import { CheckCircle2, AlertTriangle, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const reviewItems = [
  { label: "National ID Match", value: "Verified", tone: "emerald" },
  { label: "Academic Transcript", value: "Needs manual review", tone: "amber" },
  { label: "Birth Certificate", value: "Confirmed", tone: "emerald" },
  { label: "Income Letter", value: "Mismatch", tone: "rose" },
];

export default function OcrReviewPage() {
  return (
    <PageShell
      role="officer"
      title="OCR Review"
      description="Inspect OCR results and decide whether documents are ready for further evaluation."
      badge={<><Sparkles className="h-4 w-4" /> Document review</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          {reviewItems.map((item) => {
            const toneClasses = item.tone === "emerald"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : item.tone === "amber"
                ? "border-amber-200 bg-amber-50 text-amber-700"
                : "border-rose-200 bg-rose-50 text-rose-700";
            return (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <span className={`rounded-full border px-3 py-1 text-sm font-semibold ${toneClasses}`}>
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-900 p-2 text-white">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Review summary</h3>
              <p className="text-sm text-slate-500">Most documents passed OCR extraction, while one requires follow-up.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

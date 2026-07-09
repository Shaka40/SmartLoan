import { FileText, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const details = [
  { label: "Applicant", value: "Musa Juma" },
  { label: "Programme", value: "Computer Science" },
  { label: "Year of Study", value: "3rd Year" },
  { label: "GPA", value: "3.82" },
  { label: "Parent Income", value: "TZS 2,100,000" },
  { label: "Estimated Neediness", value: "High" },
];

export default function ApplicationDetailsPage() {
  return (
    <PageShell
      role="officer"
      title="Application Details"
      description="Inspect a single student application in detail before making a final decision."
      badge={<><FileText className="h-4 w-4" /> Review detail</>}
    >
      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-900 p-2 text-white">
              <UserRound className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Applicant Profile</h2>
              <p className="text-sm text-slate-500">Core information submitted by the student.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {details.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-1 font-semibold text-slate-900">{item.value}</p>
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
                <p className="text-sm text-slate-300">Generated from verified inputs and document review.</p>
              </div>
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm text-slate-300">Suggested outcome</p>
              <p className="mt-2 text-2xl font-semibold">Approve application</p>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-2 text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Decision actions</h3>
                <p className="text-sm text-slate-500">Officer-facing controls for approval or rejection.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">Approve</button>
              <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700">Reject</button>
              <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700">Request Clarification</button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

import { CheckCircle2, FileText, XCircle } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

export default function ApproveRejectPage() {
  return (
    <PageShell
      role="officer"
      title="Approve / Reject Application"
      description="Make a final decision on a student application using the reviewed evidence and AI recommendations."
      badge={<><FileText className="h-4 w-4" /> Final decision</>}
    >
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Application summary</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Applicant</p>
              <p className="mt-1 font-semibold text-slate-900">Musa Juma</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Programme</p>
              <p className="mt-1 font-semibold text-slate-900">Computer Science</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Neediness</p>
              <p className="mt-1 font-semibold text-slate-900">High</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Risk</p>
              <p className="mt-1 font-semibold text-slate-900">Medium</p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
          <h3 className="text-lg font-semibold">Decision controls</h3>
          <p className="mt-2 text-sm text-slate-300">Select the outcome that best fits the verified evidence and institutional policy.</p>

          <div className="mt-6 space-y-3">
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900">
              <CheckCircle2 className="h-4 w-4" />
              Approve Application
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white">
              <XCircle className="h-4 w-4" />
              Reject Application
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

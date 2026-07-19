import { useEffect, useState } from "react";
import { CheckCircle2, CircleDashed, ShieldCheck, Sparkles, UserRoundCheck } from "lucide-react";
import PageShell from "../../components/layout/PageShell";
import { request } from "../../services/api";

const stages = [
  { title: "Application Submitted", detail: "Your request entered the system successfully", status: "done" },
  { title: "Documents Uploaded", detail: "All supporting files were received", status: "done" },
  { title: "OCR Verification", detail: "AI extraction completed with one follow-up", status: "active" },
  { title: "Fraud Detection", detail: "Risk review is pending officer confirmation", status: "pending" },
  { title: "AI Assessment", detail: "Eligibility model is preparing recommendation", status: "pending" },
  { title: "Officer Review", detail: "Awaiting final loan officer assessment", status: "pending" },
  { title: "Approved / Rejected", detail: "Final outcome will be shared shortly", status: "pending" },
];

export default function ApplicationStatusPage() {
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadApplication() {
      try {
        const data = await request('/api/loan-applications/');
        setApplication(data[0] || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadApplication();
  }, []);

  return (
    <PageShell
      title="Application Status"
      description="Track your loan application through the full review pipeline with a clear timeline and real-time progress indicators."
      badge={<><Sparkles className="h-4 w-4" /> Workflow timeline</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-900 p-2 text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Current progress</h2>
                <p className="text-sm text-slate-500">Your application is moving through verification steps.</p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-700">Status update</p>
              <p className="mt-2 text-sm leading-6 text-emerald-700">
                {loading ? 'Loading your latest application...' : application ? `Latest status: ${application.status || 'submitted'}` : 'You do not have an application yet.'}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {stages.map((stage, index) => {
              const isDone = stage.status === "done";
              const isActive = stage.status === "active";
              const Icon = isDone ? CheckCircle2 : isActive ? UserRoundCheck : CircleDashed;
              const color = isDone
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : isActive
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-500";
              return (
                <div key={stage.title} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`rounded-2xl border p-2 ${color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    {index < stages.length - 1 ? <div className="mt-2 h-10 w-px bg-slate-200" /> : null}
                  </div>
                  <div className={`flex-1 rounded-3xl border p-4 ${color.includes("bg-slate-900") ? "border-slate-900/20 bg-slate-900/95" : "border-slate-200 bg-white"}`}>
                    <p className="font-semibold">{stage.title}</p>
                    <p className={`mt-1 text-sm ${color.includes("bg-slate-900") ? "text-slate-300" : "text-slate-500"}`}>
                      {stage.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

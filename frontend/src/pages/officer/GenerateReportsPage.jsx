import { FileText, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const reports = [
  { title: "Monthly review report", detail: "Summaries of officer decisions and approval throughput." },
  { title: "Fraud risk report", detail: "Flagged applicants and review outcomes for the month." },
  { title: "Student portfolio report", detail: "Overview of active and pending student applications." },
];

export default function GenerateReportsPage() {
  return (
    <PageShell
      role="officer"
      title="Generate Reports"
      description="Create operational reports to support internal reviews and institutional oversight."
      badge={<><FileText className="h-4 w-4" /> Officer reporting</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          {reports.map((report) => (
            <div key={report.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-slate-900">
                <Sparkles className="h-4 w-4" />
                <h3 className="font-semibold">{report.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-500">{report.detail}</p>
              <button className="mt-4 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">Generate</button>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

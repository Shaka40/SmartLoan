import { Search, Filter, Eye, CheckCircle2, XCircle } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const applications = [
  { name: "Musa Juma", programme: "Computer Science", status: "Pending", risk: "Low" },
  { name: "Asha Hamis", programme: "Business Studies", status: "OCR Verified", risk: "Medium" },
  { name: "Khalid Rashid", programme: "Engineering", status: "Fraud Flagged", risk: "High" },
];

export default function ApplicationListPage() {
  return (
    <PageShell
      title="Application List"
      description="Review incoming student loan applications and prioritize follow-up actions."
      badge={<><Eye className="h-4 w-4" /> Officer queue</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Pending Applications</h2>
            <p className="mt-2 text-sm text-slate-500">Use the list below to inspect applications before approval.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
              <Search className="h-4 w-4" />
              <input className="w-36 border-none bg-transparent outline-none" placeholder="Search" />
            </label>
            <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {applications.map((app) => (
            <div key={app.name} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-slate-900">{app.name}</p>
                <p className="mt-1 text-sm text-slate-500">{app.programme}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-600">{app.status}</span>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-sm text-white">{app.risk} risk</span>
                <button className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">Open</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

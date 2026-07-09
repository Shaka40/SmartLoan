import { Search, ShieldCheck, Users } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const officers = [
  { name: "Grace Msemo", unit: "Dar es Salaam", status: "Active" },
  { name: "Salum Juma", unit: "Morogoro", status: "Reviewing" },
  { name: "Hassan Kipyego", unit: "Arusha", status: "Offline" },
];

export default function OfficerManagementPage() {
  return (
    <PageShell
      title="Loan Officer Management"
      description="Manage loan officer accounts, availability, and assignment load."
      badge={<><Users className="h-4 w-4" /> Officer oversight</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Officer roster</h2>
            <p className="mt-2 text-sm text-slate-500">Track officer availability and review capacity.</p>
          </div>
          <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
            <Search className="h-4 w-4" />
            <input className="w-36 border-none bg-transparent outline-none" placeholder="Search" />
          </label>
        </div>

        <div className="mt-6 space-y-3">
          {officers.map((officer) => (
            <div key={officer.name} className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-slate-900">{officer.name}</p>
                <p className="mt-1 text-sm text-slate-500">{officer.unit}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-600">{officer.status}</span>
                <button className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">Manage</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

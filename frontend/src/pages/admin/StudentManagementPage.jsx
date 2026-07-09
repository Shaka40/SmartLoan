import { Search, GraduationCap, ShieldCheck } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const students = [
  { name: "Ahmadi Abasi", institution: "UDSM", status: "Active" },
  { name: "Rehema Mchome", institution: "IFM", status: "Pending Review" },
  { name: "Juma Ally", institution: "MUHAS", status: "Verified" },
];

export default function StudentManagementPage() {
  return (
    <PageShell
      title="Student Management"
      description="Monitor student records, account activity, and application progress from one place."
      badge={<><GraduationCap className="h-4 w-4" /> Student oversight</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Student accounts</h2>
            <p className="mt-2 text-sm text-slate-500">Review active students and their current application states.</p>
          </div>
          <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
            <Search className="h-4 w-4" />
            <input className="w-36 border-none bg-transparent outline-none" placeholder="Search" />
          </label>
        </div>

        <div className="mt-6 space-y-3">
          {students.map((student) => (
            <div key={student.name} className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-slate-900">{student.name}</p>
                <p className="mt-1 text-sm text-slate-500">{student.institution}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-600">{student.status}</span>
                <button className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">View</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

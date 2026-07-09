import { Search, Users, ShieldCheck } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const users = [
  { name: "Ahmadi Abasi", role: "Student", status: "Active" },
  { name: "Grace Msemo", role: "Loan Officer", status: "Active" },
  { name: "Daniel Kileo", role: "Admin", status: "Pending" },
];

export default function UserManagementPage() {
  return (
    <PageShell
      role="admin"
      title="User Management"
      description="View, manage, and review user roles across the SmartLoan AI platform."
      badge={<><Users className="h-4 w-4" /> Role administration</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Platform users</h2>
            <p className="mt-2 text-sm text-slate-500">Admin controls for managing student, officer, and admin access.</p>
          </div>
          <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
            <Search className="h-4 w-4" />
            <input className="w-36 border-none bg-transparent outline-none" placeholder="Search" />
          </label>
        </div>

        <div className="mt-6 space-y-3">
          {users.map((user) => (
            <div key={user.name} className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-slate-900">{user.name}</p>
                <p className="mt-1 text-sm text-slate-500">{user.role}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-600">{user.status}</span>
                <button className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">Manage</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

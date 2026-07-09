import { Camera, Mail, ShieldCheck, Sparkles, UserCircle2 } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

export default function AdminProfilePage() {
  return (
    <PageShell
      title="Profile"
      description="Manage your administrative profile and account preferences."
      badge={<><UserCircle2 className="h-4 w-4" /> Admin profile</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-600 text-3xl font-semibold text-white">
              DK
            </div>
            <button className="absolute bottom-0 right-0 rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-slate-900">Daniel Kileo</h2>
          <p className="mt-2 text-sm text-slate-500">Platform Administrator</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">Verified Admin</span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">Operations Lead</span>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-900 p-2 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Account information</h3>
              <p className="text-sm text-slate-500">Your credentials and operator details.</p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-600">
            <Mail className="h-4 w-4 text-slate-400" />
            daniel.kileo@smartloan.tz
          </div>
        </div>
      </section>
    </PageShell>
  );
}

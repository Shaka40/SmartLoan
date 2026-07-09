import { Camera, Mail, ShieldCheck, UserCircle2 } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

export default function OfficerProfilePage() {
  return (
    <PageShell
      role="officer"
      title="Officer Profile"
      description="Manage your officer profile and account details."
      badge={<><UserCircle2 className="h-4 w-4" /> Officer profile</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-600 text-3xl font-semibold text-white">
              GM
            </div>
            <button className="absolute bottom-0 right-0 rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-slate-900">Grace Msemo</h2>
          <p className="mt-2 text-sm text-slate-500">Loan Officer</p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-900 p-2 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Account information</h3>
              <p className="text-sm text-slate-500">Your officer profile and secure contact details.</p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-600">
            <Mail className="h-4 w-4 text-slate-400" />
            grace.msemo@smartloan.tz
          </div>
        </div>
      </section>
    </PageShell>
  );
}

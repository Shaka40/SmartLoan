import { ShieldCheck, AlertTriangle, ScanSearch } from "lucide-react";

export default function ApplicationIntegrityCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">Innovation 2</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">Application Integrity</h3>
        </div>
        <div className="rounded-2xl bg-violet-50 p-2 text-violet-600">
          <ShieldCheck className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white p-2 text-emerald-600 shadow-sm">
            <ScanSearch className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-700">No anomalies detected</p>
            <p className="text-xs text-emerald-600">System checked application consistency and document behavior</p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Risk Score</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">4%</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            Confidence Badge
          </div>
          <p className="mt-2 text-sm text-slate-500">High confidence • AI security model active</p>
        </div>
      </div>

      <button className="mt-5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
        View Analysis
      </button>
    </div>
  );
}

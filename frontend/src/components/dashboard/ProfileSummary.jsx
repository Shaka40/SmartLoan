export default function ProfileSummary() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white">
          AA
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Ahmadi Abasi</h3>
          <p className="text-sm text-slate-500">Computer Science • Year 3</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Student ID</p>
          <p className="mt-1 font-semibold text-slate-900">STU-1024</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Campus</p>
          <p className="mt-1 font-semibold text-slate-900">Nairobi Campus</p>
        </div>
      </div>
    </div>
  );
}

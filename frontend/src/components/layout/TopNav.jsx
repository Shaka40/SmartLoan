import { Bell, ChevronDown, Search } from "lucide-react";

export default function TopNav() {
  return (
    <header className="border-b border-slate-200 bg-white/80 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 xl:hidden">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
            🏛
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">SmartLoan AI</p>
            <p className="text-xs text-slate-500">Student Dashboard</p>
          </div>
        </div>

        <label className="hidden flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex">
          <Search className="h-4 w-4" />
          <input
            className="w-full border-none bg-transparent outline-none placeholder:text-slate-400"
            placeholder="Search applications, docs, insights..."
          />
        </label>

        <div className="flex items-center gap-3">
          <button className="relative rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:bg-slate-50">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-rose-500" />
          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-600 text-sm font-semibold text-white">
              AH
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-900">Ahmadi Abasi</p>
              <p className="text-xs text-slate-500">Student</p>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </button>
        </div>
      </div>
    </header>
  );
}

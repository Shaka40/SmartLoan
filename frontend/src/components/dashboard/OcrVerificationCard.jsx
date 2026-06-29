import { FileCheck2, Clock3, Eye } from "lucide-react";

const documents = [
  {
    name: "National ID",
    status: "Verified",
    timestamp: "2026-06-29 08:40",
    tone: "emerald",
    icon: FileCheck2,
  },
  {
    name: "Academic Transcript",
    status: "Verified",
    timestamp: "2026-06-29 07:55",
    tone: "emerald",
    icon: FileCheck2,
  },
  {
    name: "Parent Income Letter",
    status: "Processing",
    timestamp: "Queued for review",
    tone: "amber",
    icon: Clock3,
  },
  {
    name: "Birth Certificate",
    status: "Verified",
    timestamp: "2026-06-28 21:10",
    tone: "emerald",
    icon: FileCheck2,
  },
];

export default function OcrVerificationCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">Innovation 1</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">OCR Document Verification</h3>
        </div>
        <div className="rounded-2xl bg-blue-50 p-2 text-blue-600">
          <FileCheck2 className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {documents.map((item) => {
          const Icon = item.icon;
          const toneClasses = {
            emerald: "bg-emerald-50 text-emerald-700",
            amber: "bg-amber-50 text-amber-700",
          };

          return (
            <div key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white p-2 text-slate-700 shadow-sm">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.timestamp}</p>
                  </div>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${toneClasses[item.tone]}`}>
                  {item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
        <Eye className="h-4 w-4" />
        View Details
      </button>
    </div>
  );
}

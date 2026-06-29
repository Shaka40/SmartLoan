const steps = [
  "Submitted",
  "Documents Uploaded",
  "OCR Verification",
  "AI Assessment",
  "Officer Review",
  "Loan Allocation",
  "Completed",
];

export default function Timeline() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Application Progress</h3>
          <p className="mt-1 text-sm text-slate-500">
            Current workflow and milestone checkpoints
          </p>
        </div>
        <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
          In Progress
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {steps.map((step, index) => {
          const isActive = index <= 4;
          const isComplete = index < 5;

          return (
            <div key={step} className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                  isComplete
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : isActive
                      ? "border-slate-300 bg-slate-100 text-slate-700"
                      : "border-slate-200 bg-white text-slate-400"
                }`}
              >
                {index + 1}
              </div>
              <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                {step}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

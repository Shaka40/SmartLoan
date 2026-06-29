const documents = [
  { name: "National ID", status: "Verified" },
  { name: "Academic Transcript", status: "Pending Review" },
  { name: "Income Certificate", status: "Uploaded" },
];

export default function DocumentStatus() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Required Documents</h3>
      <div className="mt-5 space-y-3">
        {documents.map((item) => (
          <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-sm font-medium text-slate-700">{item.name}</p>
            <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const notifications = [
  { title: "OCR Review Complete", detail: "Your uploaded ID documents are verified successfully.", time: "5 mins ago" },
  { title: "Officer Feedback", detail: "A request for additional information was submitted.", time: "1 hour ago" },
  { title: "Eligibility Update", detail: "Your profile strength improved after document review.", time: "2 hours ago" },
];

export default function NotificationsPanel() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Notifications</h3>
        <button className="text-sm font-medium text-slate-500 hover:text-slate-900">View all</button>
      </div>
      <div className="mt-5 space-y-3">
        {notifications.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
              </div>
              <span className="text-xs text-slate-400">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

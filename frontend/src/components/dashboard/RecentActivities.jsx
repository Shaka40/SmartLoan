const activities = [
  { title: "Application Submitted", time: "10:40 AM" },
  { title: "Documents Uploaded", time: "09:15 AM" },
  { title: "AI Assessment Completed", time: "Yesterday" },
];

export default function RecentActivities() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Recent Activities</h3>
      <div className="mt-5 space-y-3">
        {activities.map((activity) => (
          <div key={activity.title} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-sm font-medium text-slate-700">{activity.title}</p>
            <span className="text-sm text-slate-400">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import { ShieldCheck, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const logs = [
  { action: "Officer approved application", actor: "Grace Msemo", time: "10:14 AM" },
  { action: "Student uploaded documents", actor: "Ahmadi Abasi", time: "09:02 AM" },
  { action: "Admin updated system settings", actor: "Daniel Kileo", time: "08:25 AM" },
];

export default function AuditLogsPage() {
  return (
    <PageShell
      title="Audit Logs"
      description="Review recent sensitive actions and maintain accountability across the platform."
      badge={<><ShieldCheck className="h-4 w-4" /> Security history</>}
    >
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="space-y-3">
          {logs.map((log) => (
            <div key={log.action} className="flex flex-col gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-slate-900">{log.action}</p>
                <p className="mt-1 text-sm text-slate-500">Actor: {log.actor}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Sparkles className="h-4 w-4" />
                {log.time}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

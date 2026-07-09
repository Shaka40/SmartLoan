import { Bell, Lock, MoonStar, ShieldCheck, LogOut, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const settingsSections = [
  {
    title: "Change Password",
    description: "Update your account password regularly to keep your account secure.",
    icon: Lock,
  },
  {
    title: "Notification Preferences",
    description: "Choose how you receive alerts for application and document updates.",
    icon: Bell,
  },
  {
    title: "Theme",
    description: "Switch the interface between a light and dark experience.",
    icon: MoonStar,
  },
  {
    title: "Security",
    description: "Manage your account verification and access protection preferences.",
    icon: ShieldCheck,
  },
];

export default function SettingsPage() {
  return (
    <PageShell
      title="Settings"
      description="Control your account preferences, security, and notification behavior from one place."
      badge={<><Sparkles className="h-4 w-4" /> Account settings</>}
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {settingsSections.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-900 p-2 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
          <h3 className="text-lg font-semibold">Security status</h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            Your account is protected with strong password requirements and active verification preferences.
          </p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-4">
            <div className="flex items-center gap-2 text-emerald-300">
              <ShieldCheck className="h-5 w-5" />
              <p className="font-semibold">Two-step protection enabled</p>
            </div>
            <p className="mt-3 text-sm text-slate-300">You will be prompted to confirm major account changes and password resets.</p>
          </div>
          <button className="mt-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </section>
    </PageShell>
  );
}

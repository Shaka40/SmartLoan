import { ArrowRight, GraduationCap, ShieldCheck, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const roles = [
  {
    title: "Student Portal",
    description: "Apply for a loan, track progress, review AI explanations, and manage your documents.",
    icon: GraduationCap,
    href: "/student/dashboard",
    accent: "from-blue-600 to-cyan-500",
  },
  {
    title: "Loan Officer Portal",
    description: "Review applications, inspect OCR evidence, assess fraud signals, and make decisions.",
    icon: ShieldCheck,
    href: "/officer/dashboard",
    accent: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "Admin Portal",
    description: "Manage users, monitor analytics, oversee reports, and control platform settings.",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
    accent: "from-slate-900 to-slate-700",
  },
];

export default function RoleSelectionPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%),linear-gradient(135deg,_#f8fbff_0%,_#f3f7ff_45%,_#eef4ff_100%)] px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="max-w-3xl">
            <div className="soft-pill">
              <ShieldCheck className="h-4 w-4" />
              SmartLoan AI demo experience
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Preview the full SmartLoan AI experience by role
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              This landing view makes it easier to explore the student, loan officer, and admin workflows in one place before diving into a specific dashboard.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div key={role.title} className="panel-card p-6">
                <div className={`inline-flex rounded-2xl bg-gradient-to-br ${role.accent} p-3 text-white`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-900">{role.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{role.description}</p>
                <Link to={role.href} className="btn-primary mt-6 w-full">
                  Open dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

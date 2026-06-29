import Sidebar from "../../components/layout/Sidebar";
import TopNav from "../../components/layout/TopNav";
import StatCard from "../../components/dashboard/StatCard";
import RecommendationCard from "../../components/dashboard/RecommendationCard";
import NotificationsPanel from "../../components/dashboard/NotificationsPanel";
import ProfileSummary from "../../components/dashboard/ProfileSummary";
import OcrVerificationCard from "../../components/dashboard/OcrVerificationCard";
import ApplicationIntegrityCard from "../../components/dashboard/ApplicationIntegrityCard";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%),linear-gradient(135deg,_#f8fbff_0%,_#f3f7ff_45%,_#eef4ff_100%)] text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1">
          <TopNav />

          <main className="space-y-6 p-4 sm:p-6 lg:p-8">
            <section className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-6 text-white shadow-sm sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-300">Welcome back</p>
                  <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Ahmadi Abasi
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                    Third-year Computer Science student • Your current application is under AI review and moving smoothly through the pipeline.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                  <p className="text-sm text-slate-300">Current application status</p>
                  <p className="mt-1 text-lg font-semibold">Pending Officer Review</p>
                </div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <StatCard title="Application Status" value="74%" subtitle="Progress complete" tone="blue" />
              <StatCard title="Verification Status" value="Verified" subtitle="3 of 3 checks passed" tone="emerald" />
              <StatCard title="Loan Decision" value="Eligible" subtitle="Priority review" tone="amber" />
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <OcrVerificationCard />
              <ApplicationIntegrityCard />
            </section>

            <section className="grid gap-6">
              <RecommendationCard />
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <NotificationsPanel />
              <ProfileSummary />
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Support Snapshot</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Your application is progressing well. If you need help with document submission or eligibility questions, contact the financial support team.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

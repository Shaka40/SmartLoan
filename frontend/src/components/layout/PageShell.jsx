import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

export default function PageShell({ title, description, badge, rightAction, children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%),linear-gradient(135deg,_#f8fbff_0%,_#f3f7ff_45%,_#eef4ff_100%)] text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1">
          <TopNav />

          <main className="space-y-6 p-4 sm:p-6 lg:p-8">
            <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  {badge ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                      {badge}
                    </div>
                  ) : null}
                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    {title}
                  </h1>
                  {description ? (
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                      {description}
                    </p>
                  ) : null}
                </div>
                {rightAction ? <div>{rightAction}</div> : null}
              </div>
            </section>

            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

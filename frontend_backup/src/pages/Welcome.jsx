import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'AI Loan Prediction',
    description:
      'Leverage machine learning to evaluate eligibility with accuracy, transparency, and fairness.',
  },
  {
    title: 'Fraud Detection System',
    description:
      'Identify suspicious activity and protect applicants with intelligent fraud monitoring.',
  },
  {
    title: 'Fast Automated Processing',
    description:
      'Accelerate application reviews with streamlined approvals and real-time decision support.',
  },
];

const Welcome = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
        <Link to="/" className="text-xl font-semibold tracking-tight text-white">
          SmartLoan AI
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
          >
            Register
          </Link>
        </nav>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-8 lg:px-10 lg:pt-16">
        <section className="grid items-center gap-12 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl shadow-slate-950/50 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-300">
              AI-powered financial decisioning
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              AI-Based Student Loan Allocation System
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Smarter, Faster, and Fair Loan Decisions Powered by AI
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/login"
                className="rounded-full bg-sky-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
              >
                Register
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/40">
            <div className="rounded-2xl border border-sky-500/20 bg-slate-950/80 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Eligibility Score</p>
                  <p className="mt-1 text-3xl font-semibold text-white">92%</p>
                </div>
                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                  Approved
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
                    <span>Risk Assessment</span>
                    <span>Low</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-4/5 rounded-full bg-sky-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
                    <span>Fraud Detection</span>
                    <span>Secure</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-5/6 rounded-full bg-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Powerful Features for Modern Lending
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              Designed to simplify decision-making while keeping accuracy, fairness, and security at the core.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-sky-500/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © SmartLoan AI. All rights reserved.
      </footer>
    </div>
  );
};

export default Welcome;

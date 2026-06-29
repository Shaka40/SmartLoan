import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "12,000+", label: "Students Funded" },
  { value: "98%", label: "Prediction Accuracy" },
  { value: "< 2 Min", label: "Average Processing" },
  { value: "100%", label: "Secure & Trusted" },
];

const features = [
  {
    title: " 🏛️ AI Loan Prediction",
    desc: "Advanced algorithms analyze thousands of data points for accurate eligibility.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: " 🕵️ Fraud Detection",
    desc: "Multi-layered security with real-time behavioral monitoring.",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    title: " ⚡️Fast Processing",
    desc: "Automated workflow for instant decisions and quick disbursement.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: " 🎓 Secure & Reliable",
    desc: "Bank-grade encryption and compliance for every application.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f8ff] to-[#eef2ff] text-[#0a2540]">

      {/* NAVBAR */}
      <header className="sticky top-0 bg-white/70 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-2xl">🏛</span>
            SmartLoan AI
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a className="hover:text-blue-600">Home</a>
            <a className="hover:text-blue-600">Solutions</a>
            <a className="hover:text-blue-600">Security</a>
            <a className="hover:text-blue-600">About</a>
          </nav>

          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-5 py-2 rounded-xl border border-gray-200 hover:bg-gray-100"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 rounded-xl bg-[#0a2540] text-white hover:opacity-90"
            >
              Register
            </Link>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Next-Gen Financial Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            AI-Based Student Loan <br />
            <span className="text-blue-600">Allocation System</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Smarter, faster, and fair loan decisions powered by AI.
            We analyze data in real time to deliver instant approvals.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <Link
              to="/login"
              className="px-6 py-4 bg-[#0a2540] text-white rounded-xl font-semibold hover:scale-105 transition"
            >
              Login Now
            </Link>

            <Link
              to="/register"
              className="px-6 py-4 border rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Register Account
            </Link>
          </div>
        </div>

        {/* RIGHT: STUDENT IMAGE WITH CORNER CARD */}
        <div className="relative flex justify-center items-center">
          {/* Background Glow */}
          <div className="absolute w-72 h-72 bg-blue-200 blur-3xl rounded-full opacity-40"></div>
          
          {/* Image Container */}
          <div className="relative z-10">
            <img
              src="/student.jpg"
              alt="Student"
              className="w-72 sm:w-80 md:w-96 h-auto object-contain rounded-2xl shadow-2xl"
            />
            
            {/* Floating Card - Bottom Right Corner */}
            <div className="absolute -bottom-2 -right-2 bg-white rounded-2xl shadow-xl p-3 w-48">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl">🎓</span>
                  <div>
                    <p className="font-bold text-sm">Approved</p>
                    <p className="text-xs text-gray-500">98% Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${item.color} mb-4`}>
              {item.title}
            </div>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a2540] text-white/70 py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 SmartLoan AI</p>
          <div className="flex gap-6 text-sm">
            <a>Privacy</a>
            <a>Terms</a>
            <a>Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
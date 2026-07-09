import { CheckCircle2, AlertTriangle, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const verificationItems = [
  {
    title: "National ID",
    status: "Verified",
    detail: "Name and birth date matched official records",
    tone: "emerald",
    icon: CheckCircle2,
  },
  {
    title: "Academic Transcript",
    status: "Processing",
    detail: "OCR extraction is reviewing institution seal and grades",
    tone: "amber",
    icon: Clock3,
  },
  {
    title: "Birth Certificate",
    status: "Mismatch",
    detail: "Date appears inconsistent with submitted profile",
    tone: "rose",
    icon: AlertTriangle,
  },
];

const extractedFields = [
  { label: "Applicant Name", value: "Ahmadi Abasi" },
  { label: "National ID", value: "1998123456789001" },
  { label: "Institution", value: "University of Dar es Salaam" },
  { label: "Programme", value: "Computer Science" },
  { label: "GPA", value: "3.86" },
  { label: "Parent Income", value: "TZS 2,400,000" },
];

export default function OcrVerificationPage() {
  return (
    <PageShell
      title="OCR Verification"
      description="Review extracted details from your documents and monitor the verification status in real time."
      badge={<><Sparkles className="h-4 w-4" /> AI document review</>}
    >
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Document Verification Results</h2>
              <p className="mt-2 text-sm text-slate-500">Mock OCR findings generated from uploaded files.</p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
              3 checks reviewed
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {verificationItems.map((item) => {
              const Icon = item.icon;
              const toneClasses =
                item.tone === "emerald"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : item.tone === "amber"
                    ? "border-amber-200 bg-amber-50 text-amber-700"
                    : "border-rose-200 bg-rose-50 text-rose-700";
              return (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className={`rounded-2xl border p-2 ${toneClasses}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                      </div>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-sm font-semibold ${toneClasses}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-2">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Extracted Information</h2>
              <p className="text-sm text-slate-300">Verified values extracted from your documents.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {extractedFields.map((field) => (
              <div key={field.label} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                <p className="text-sm text-slate-300">{field.label}</p>
                <p className="mt-1 font-semibold text-white">{field.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-4">
            <p className="text-sm font-semibold text-emerald-300">Verification badge</p>
            <p className="mt-2 text-sm text-emerald-100">Your application is progressing well. One document requires a follow-up review before final AI assessment.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

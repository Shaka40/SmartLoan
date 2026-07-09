import { Camera, GraduationCap, Mail, MapPin, Phone, ShieldCheck, Sparkles, UserCircle2 } from "lucide-react";
import PageShell from "../../components/layout/PageShell";

const profileSections = [
  {
    title: "Personal Information",
    items: [
      { label: "Full Name", value: "Ahmadi Abasi" },
      { label: "Gender", value: "Male" },
      { label: "Date of Birth", value: "12 April 2001" },
      { label: "National ID", value: "1998123456789001" },
    ],
  },
  {
    title: "Academic Information",
    items: [
      { label: "Institution", value: "University of Dar es Salaam" },
      { label: "Programme", value: "Computer Science" },
      { label: "Faculty", value: "College of ICT" },
      { label: "Year of Study", value: "3rd Year" },
      { label: "GPA", value: "3.86" },
    ],
  },
  {
    title: "Socioeconomic Information",
    items: [
      { label: "Parent Occupation", value: "Small Business Owner" },
      { label: "Parent Income", value: "TZS 2,400,000" },
      { label: "Dependents", value: "4" },
      { label: "Orphan Status", value: "No" },
      { label: "Disability Status", value: "No" },
    ],
  },
];

export default function ProfilePage() {
  return (
    <PageShell
      title="Profile"
      description="Manage your student profile, uploaded documents, and key personal details in one place."
      badge={<><UserCircle2 className="h-4 w-4" /> Student profile</>}
      rightAction={
        <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
          Edit Profile
        </button>
      }
    >
      <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-600 text-3xl font-semibold text-white">
                AA
              </div>
              <button className="absolute bottom-0 right-0 rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">Ahmadi Abasi</h2>
            <p className="mt-2 text-sm text-slate-500">Third-year Computer Science student</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">Verified Student</span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">Active Application</span>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
              <Mail className="h-4 w-4 text-slate-400" />
              ahmadi.abasi@student.udsm.ac.tz
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
              <Phone className="h-4 w-4 text-slate-400" />
              +255 712 345 678
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
              <MapPin className="h-4 w-4 text-slate-400" />
              Mabibo, Dar es Salaam
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {profileSections.map((section) => (
            <div key={section.title} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-slate-900 p-2 text-white">
                  {section.title.includes("Academic") ? <GraduationCap className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-1 font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-2">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Uploaded Documents</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {['National ID', 'Academic Transcript', 'Birth Certificate', 'Parent Income Letter'].map((doc) => (
                <div key={doc} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm">
                  {doc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

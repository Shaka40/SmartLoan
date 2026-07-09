import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileText,
  GraduationCap,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";
import Sidebar from "../../components/layout/Sidebar";
import TopNav from "../../components/layout/TopNav";

const steps = [
  { id: 1, title: "Personal Information", hint: "Identity and contact details" },
  { id: 2, title: "Academic Information", hint: "Enrollment and performance" },
  { id: 3, title: "Socioeconomic Information", hint: "Family support and financial context" },
  { id: 4, title: "Document Upload", hint: "Verification documents" },
  { id: 5, title: "Review & Submit", hint: "Confirm before sending" },
];

const initialForm = {
  fullName: "Ahmadi Abasi",
  gender: "Male",
  dob: "2001-04-12",
  nationalId: "1998123456789001",
  phone: "+255 712 345 678",
  email: "ahmadi.abasi@student.udsm.ac.tz",
  address: "Mabibo, Dar es Salaam",
  institution: "University of Dar es Salaam",
  regNumber: "2021-04-12345",
  programme: "Computer Science",
  faculty: "College of Information and Communication Technologies",
  yearOfStudy: "3rd Year",
  gpa: "3.86",
  parentOccupation: "Small Business Owner",
  parentEmploymentStatus: "Employed",
  parentIncome: "2,400,000",
  dependents: "4",
  totalFamilyMembers: "6",
  orphanStatus: "No",
  ritaDeathCode: "",
  disabilityStatus: "No",
  disabilityDescription: "",
  disabilityDocs: [],
  specialCircumstances: {
    singleParent: false,
    guardianOnly: false,
    parentWithDisability: false,
    familyAffectedByNaturalDisaster: false,
    other: "",
  },
  sponsorship: "Self Sponsorship",
  sponsorshipType: "No",
  sponsorName: "",
  sponsorshipAmount: "",
  familyHouseOwnership: "Own House",
  previousLoanReceived: "No",
  previousLoanYear: "",
  previousLoanAmount: "",
};

const initialUploads = [
  { name: "National ID", status: "Completed", progress: 100 },
  { name: "Academic Transcript", status: "Processing", progress: 78 },
  { name: "Birth Certificate", status: "Completed", progress: 100 },
  { name: "Parent Income Letter", status: "Queued", progress: 32 },
];

function Field({ label, name, value, onChange, type = "text", placeholder = "" }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white"
      />
    </label>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function LoanApplicationWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [uploads, setUploads] = useState(initialUploads);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSpecial = (key) => {
    setForm((prev) => ({
      ...prev,
      specialCircumstances: { ...prev.specialCircumstances, [key]: !prev.specialCircumstances[key] },
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setForm((prev) => ({ ...prev, disabilityDocs: [...prev.disabilityDocs, file.name] }));
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 0) {
      if (!form.fullName) newErrors.fullName = "Full name is required";
      if (!form.nationalId) newErrors.nationalId = "National ID is required";
      if (!form.phone) newErrors.phone = "Phone is required";
      if (!form.email) newErrors.email = "Email is required";
    }
    if (currentStep === 1) {
      if (!form.institution) newErrors.institution = "Institution is required";
      if (!form.regNumber) newErrors.regNumber = "Registration number is required";
      if (!form.programme) newErrors.programme = "Programme is required";
      if (!form.faculty) newErrors.faculty = "Faculty/School is required";
      if (!form.yearOfStudy) newErrors.yearOfStudy = "Year of study is required";
    }
    if (currentStep === 2) {
      if (!form.parentOccupation) newErrors.parentOccupation = "Parent occupation is required";
      if (!form.parentIncome) newErrors.parentIncome = "Parent income is required";
      if (!form.dependents) newErrors.dependents = "Number of dependents is required";
      if (!form.totalFamilyMembers) newErrors.totalFamilyMembers = "Total family members is required";
      if (!form.orphanStatus) newErrors.orphanStatus = "Orphan status is required";
      if (form.orphanStatus === "Yes" && !form.ritaDeathCode) newErrors.ritaDeathCode = "RITA death code is required";
      if (!form.disabilityStatus) newErrors.disabilityStatus = "Disability status is required";
      if (form.disabilityStatus === "Yes" && !form.disabilityDescription) newErrors.disabilityDescription = "Please describe the disability";
      if (!form.sponsorshipType) newErrors.sponsorshipType = "Please select sponsorship option";
      if (form.sponsorshipType !== "No" && !form.sponsorName) newErrors.sponsorName = "Sponsor name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleNext = () => {
    if (validateStep(step)) nextStep();
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // TODO: replace this mock submission with a FastAPI-backed application endpoint later.
  };

  const progressPercent = ((step + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%),linear-gradient(135deg,_#f8fbff_0%,_#f3f7ff_45%,_#eef4ff_100%)] text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1">
          <TopNav />

          <main className="space-y-6 p-4 sm:p-6 lg:p-8">
            <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    <FileText className="h-4 w-4" />
                    Student loan application
                  </div>
                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    Loan Application Wizard
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                    Complete this guided application to request a student loan with AI-assisted review and document verification.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-sm text-slate-500">Current step</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    {steps[step].id} of {steps.length}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
                  <span>Progress</span>
                  <span>{Math.round(progressPercent)}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-100">
                  <div
                    className="h-2.5 rounded-full bg-slate-900 transition-all"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-5">
                {steps.map((item, index) => {
                  const active = index === step;
                  const completed = index < step;
                  return (
                    <div
                      key={item.id}
                      className={`rounded-2xl border px-3 py-3 text-sm ${
                        completed
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : active
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-200 bg-white text-slate-600"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-semibold">
                        {completed ? <CheckCircle2 className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                        <span>{item.title}</span>
                      </div>
                      <p className={`mt-2 text-xs ${completed ? "text-emerald-600" : active ? "text-slate-300" : "text-slate-500"}`}>
                        {item.hint}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              {step === 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-slate-900 p-3 text-white">
                      <BadgeCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">Personal Information</h2>
                      <p className="text-sm text-slate-500">Use your legal name and current contact details as they appear on official records.</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Full Name" name="fullName" value={form.fullName} onChange={updateField} />
                    <SelectField
                      label="Gender"
                      name="gender"
                      value={form.gender}
                      onChange={updateField}
                      options={["Male", "Female", "Prefer not to say"]}
                    />
                    <Field label="Date of Birth" name="dob" value={form.dob} onChange={updateField} type="date" />
                    <Field label="National ID" name="nationalId" value={form.nationalId} onChange={updateField} />
                    <Field label="Phone" name="phone" value={form.phone} onChange={updateField} />
                    <Field label="Email" name="email" value={form.email} onChange={updateField} type="email" />
                  </div>

                  <Field label="Address" name="address" value={form.address} onChange={updateField} placeholder="Street, ward, district" />
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-slate-900 p-3 text-white">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">Academic Information</h2>
                      <p className="text-sm text-slate-500">Share your enrolled programme, institution, and current academic standing.</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Institution" name="institution" value={form.institution} onChange={updateField} />
                    <Field label="Registration Number" name="regNumber" value={form.regNumber} onChange={updateField} />
                    <SelectField
                      label="Programme"
                      name="programme"
                      value={form.programme}
                      onChange={updateField}
                      options={["Computer Science", "Business Studies", "Engineering", "Law", "Medicine"]}
                    />
                    <SelectField
                      label="Faculty / School"
                      name="faculty"
                      value={form.faculty}
                      onChange={updateField}
                      options={["College of ICT", "College of Business", "College of Engineering", "College of Law", "College of Health"]}
                    />
                    <SelectField
                      label="Year of Study"
                      name="yearOfStudy"
                      value={form.yearOfStudy}
                      onChange={updateField}
                      options={["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"]}
                    />
                    <Field label="GPA" name="gpa" value={form.gpa} onChange={updateField} />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-slate-900 p-3 text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">Socioeconomic Information</h2>
                      <p className="text-sm text-slate-500">This helps the system estimate financial need fairly and responsibly.</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <SelectField
                      label="Parent / Guardian Occupation"
                      name="parentOccupation"
                      value={form.parentOccupation}
                      onChange={updateField}
                      options={["Teacher", "Small Business Owner", "Civil Servant", "Farmer", "Unemployed", "Other"]}
                    />
                    <SelectField
                      label="Parent / Guardian Employment Status"
                      name="parentEmploymentStatus"
                      value={form.parentEmploymentStatus}
                      onChange={updateField}
                      options={["Employed", "Self-employed", "Farmer", "Casual Worker", "Unemployed", "Retired"]}
                    />
                    <Field label="Parent Monthly Income (TZS)" name="parentIncome" value={form.parentIncome} onChange={updateField} />
                    <Field label="Number of Dependents" name="dependents" value={form.dependents} onChange={updateField} />
                    <Field label="Total Number of Family Members" name="totalFamilyMembers" value={form.totalFamilyMembers} onChange={updateField} />
                    <SelectField
                      label="Orphan Status"
                      name="orphanStatus"
                      value={form.orphanStatus}
                      onChange={updateField}
                      options={["No", "Yes"]}
                    />
                    <SelectField
                      label="Disability Status"
                      name="disabilityStatus"
                      value={form.disabilityStatus}
                      onChange={updateField}
                      options={["No", "Yes"]}
                    />
                    <SelectField
                      label="House ownership"
                      name="familyHouseOwnership"
                      value={form.familyHouseOwnership}
                      onChange={updateField}
                      options={["Own House", "Rental House", "Employer Provided", "Other"]}
                    />
                  </div>

                  {form.orphanStatus === "Yes" && (
                    <div>
                      <Field label="RITA Death Verification Code" name="ritaDeathCode" value={form.ritaDeathCode} onChange={updateField} />
                      {errors.ritaDeathCode ? <p className="text-rose-600 text-xs mt-1">{errors.ritaDeathCode}</p> : null}
                    </div>
                  )}

                  {form.disabilityStatus === "Yes" && (
                    <div className="space-y-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-slate-700">Describe disability</span>
                        <textarea name="disabilityDescription" value={form.disabilityDescription} onChange={updateField} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none" />
                      </label>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Upload supporting document</label>
                        <input type="file" onChange={handleFileChange} className="mt-2" />
                        {form.disabilityDocs.length > 0 ? (
                          <p className="mt-2 text-sm text-slate-600">Files: {form.disabilityDocs.join(", ")}</p>
                        ) : null}
                      </div>
                    </div>
                  )}

                  <div className="mt-3">
                    <p className="mb-2 block text-sm font-medium text-slate-700">Special circumstances</p>
                    <div className="flex flex-wrap gap-3">
                      <label className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                        <input type="checkbox" checked={form.specialCircumstances.singleParent} onChange={() => toggleSpecial("singleParent")} />
                        <span className="text-sm">Single Parent</span>
                      </label>
                      <label className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                        <input type="checkbox" checked={form.specialCircumstances.guardianOnly} onChange={() => toggleSpecial("guardianOnly")} />
                        <span className="text-sm">Guardian Only</span>
                      </label>
                      <label className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                        <input type="checkbox" checked={form.specialCircumstances.parentWithDisability} onChange={() => toggleSpecial("parentWithDisability")} />
                        <span className="text-sm">Parent with Disability</span>
                      </label>
                      <label className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                        <input type="checkbox" checked={form.specialCircumstances.familyAffectedByNaturalDisaster} onChange={() => toggleSpecial("familyAffectedByNaturalDisaster")} />
                        <span className="text-sm">Family Affected by Natural Disaster</span>
                      </label>
                      <label className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                        <input type="checkbox" checked={!!form.specialCircumstances.other} onChange={() => setForm((p) => ({ ...p, specialCircumstances: { ...p.specialCircumstances, other: p.specialCircumstances.other ? "" : "Other" } }))} />
                        <span className="text-sm">Other</span>
                      </label>
                    </div>
                    {form.specialCircumstances.other !== "" && (
                      <div className="mt-2">
                        <input name="specialOtherText" placeholder="Describe" value={form.specialCircumstances.other === "Other" ? form.specialCircumstances.otherText ?? "" : form.specialCircumstances.otherText ?? ""} onChange={(e) => setForm((p) => ({ ...p, specialCircumstances: { ...p.specialCircumstances, otherText: e.target.value } }))} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" />
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <p className="mb-2 block text-sm font-medium text-slate-700">Do you currently receive financial support?</p>
                    <select name="sponsorshipType" value={form.sponsorshipType} onChange={updateField} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                      <option>No</option>
                      <option>Government</option>
                      <option>NGO</option>
                      <option>Scholarship</option>
                      <option>Employer</option>
                      <option>Relative</option>
                    </select>
                    {form.sponsorshipType !== "No" && (
                      <div className="mt-3 grid gap-3 md:grid-cols-2">
                        <Field label="Sponsor Name" name="sponsorName" value={form.sponsorName} onChange={updateField} />
                        <Field label="Sponsorship Amount (TZS / year)" name="sponsorshipAmount" value={form.sponsorshipAmount} onChange={updateField} />
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <p className="mb-2 block text-sm font-medium text-slate-700">Previous loan history</p>
                    <select name="previousLoanReceived" value={form.previousLoanReceived} onChange={updateField} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                    {form.previousLoanReceived === "Yes" && (
                      <div className="mt-3 grid gap-3 md:grid-cols-2">
                        <Field label="Previous Academic Year" name="previousLoanYear" value={form.previousLoanYear} onChange={updateField} />
                        <Field label="Previous Loan Amount (TZS)" name="previousLoanAmount" value={form.previousLoanAmount} onChange={updateField} />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-slate-900 p-3 text-white">
                      <UploadCloud className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">Document Upload</h2>
                      <p className="text-sm text-slate-500">Upload your support documents. The mock upload progress below reflects the expected verification flow.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {uploads.map((item) => (
                      <div key={item.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="font-semibold text-slate-900">{item.name}</p>
                            <p className="text-sm text-slate-500">{item.status}</p>
                          </div>
                          <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                            Upload file
                          </button>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-slate-200">
                          <div className="h-2 rounded-full bg-slate-900" style={{ width: `${item.progress}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-slate-900 p-3 text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">Review & Submit</h2>
                      <p className="text-sm text-slate-500">Review your application details and submit when everything looks correct.</p>
                    </div>
                  </div>

                  {!submitted ? (
                    <div className="space-y-4">
                      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-slate-900">Application Summary</h3>
                          <button
                            onClick={() => setStep(0)}
                            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                          >
                            Edit details
                          </button>
                        </div>
                        <div className="mt-4 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
                          <div>
                            <p className="text-slate-400">Full Name</p>
                            <p className="mt-1 font-medium text-slate-900">{form.fullName}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Institution</p>
                            <p className="mt-1 font-medium text-slate-900">{form.institution}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Programme</p>
                            <p className="mt-1 font-medium text-slate-900">{form.programme}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Faculty / School</p>
                            <p className="mt-1 font-medium text-slate-900">{form.faculty}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Year of Study</p>
                            <p className="mt-1 font-medium text-slate-900">{form.yearOfStudy}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">GPA</p>
                            <p className="mt-1 font-medium text-slate-900">{form.gpa}</p>
                          </div>

                          <div>
                            <p className="text-slate-400">Parent / Guardian Occupation</p>
                            <p className="mt-1 font-medium text-slate-900">{form.parentOccupation}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Employment Status</p>
                            <p className="mt-1 font-medium text-slate-900">{form.parentEmploymentStatus}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Parent Monthly Income</p>
                            <p className="mt-1 font-medium text-slate-900">{form.parentIncome}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Dependents</p>
                            <p className="mt-1 font-medium text-slate-900">{form.dependents}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Total Family Members</p>
                            <p className="mt-1 font-medium text-slate-900">{form.totalFamilyMembers}</p>
                          </div>

                          <div>
                            <p className="text-slate-400">Orphan Status</p>
                            <p className="mt-1 font-medium text-slate-900">{form.orphanStatus}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Disability Status</p>
                            <p className="mt-1 font-medium text-slate-900">{form.disabilityStatus}</p>
                          </div>
                          {form.disabilityStatus === "Yes" && (
                            <div>
                              <p className="text-slate-400">Disability Details</p>
                              <p className="mt-1 font-medium text-slate-900">{form.disabilityDescription}</p>
                            </div>
                          )}

                          <div>
                            <p className="text-slate-400">Special Circumstances</p>
                            <p className="mt-1 font-medium text-slate-900">
                              {Object.entries(form.specialCircumstances)
                                .filter(([k, v]) => k === "other" ? !!form.specialCircumstances.otherText : v)
                                .map(([k, v]) => (k === "other" ? form.specialCircumstances.otherText : k.replace(/([A-Z])/g, " $1")))
                                .join(", ") || "—"}
                            </p>
                          </div>

                          <div>
                            <p className="text-slate-400">Sponsorship</p>
                            <p className="mt-1 font-medium text-slate-900">{form.sponsorshipType}</p>
                          </div>
                          {form.sponsorshipType !== "No" && (
                            <>
                              <div>
                                <p className="text-slate-400">Sponsor Name</p>
                                <p className="mt-1 font-medium text-slate-900">{form.sponsorName}</p>
                              </div>
                              <div>
                                <p className="text-slate-400">Sponsorship Amount (TZS/year)</p>
                                <p className="mt-1 font-medium text-slate-900">{form.sponsorshipAmount}</p>
                              </div>
                            </>
                          )}

                          <div>
                            <p className="text-slate-400">Family House Ownership</p>
                            <p className="mt-1 font-medium text-slate-900">{form.familyHouseOwnership}</p>
                          </div>

                          <div>
                            <p className="text-slate-400">Previous Loan Received</p>
                            <p className="mt-1 font-medium text-slate-900">{form.previousLoanReceived}</p>
                          </div>
                          {form.previousLoanReceived === "Yes" && (
                            <>
                              <div>
                                <p className="text-slate-400">Previous Academic Year</p>
                                <p className="mt-1 font-medium text-slate-900">{form.previousLoanYear}</p>
                              </div>
                              <div>
                                <p className="text-slate-400">Previous Loan Amount</p>
                                <p className="mt-1 font-medium text-slate-900">{form.previousLoanAmount}</p>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        Submit Application
                      </button>
                    </div>
                  ) : (
                    <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-800">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        <h3 className="text-lg font-semibold">Application submitted successfully</h3>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-emerald-700">
                        Your application has entered the review pipeline. The next phase will involve OCR verification and AI-based eligibility assessment.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Link to="/student/dashboard" className="rounded-2xl border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">
                          Return to dashboard
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
                <button
                  onClick={prevStep}
                  disabled={step === 0}
                  className="flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </button>

                {step < steps.length - 1 ? (
                  <button
                    onClick={nextStep}
                    className="flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <div className="text-sm text-slate-400">Final step</div>
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

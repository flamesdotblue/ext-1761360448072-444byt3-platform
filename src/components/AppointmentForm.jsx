import React from "react";
import { Calendar, Upload, Phone } from "lucide-react";

export default function AppointmentForm() {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    interest: "Gold",
    bespoke: false,
    notes: "",
    file: null,
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : type === "file" ? files?.[0] || null : value,
    }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^\+?\d[\d\s-]{6,}$/.test(form.phone)) errs.phone = "Enter a valid phone";
    if (form.email && !/.+@.+\..+/.test(form.email)) errs.email = "Invalid email";
    if (!form.date) errs.date = "Select date";
    if (!form.time) errs.time = "Select time";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // Placeholder for integration: Google Calendar + SMS/Email notifications
      // A backend endpoint can receive this payload and orchestrate integrations securely.
    }
  };

  if (submitted) {
    return (
      <section id="book" className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <h3 className="text-xl font-semibold text-green-800">Consultation Request Received</h3>
            <p className="mt-2 text-sm text-green-700">Thank you, {form.name.split(" ")[0] || "Guest"}. Our team will contact you shortly to confirm your time slot and share reminders.</p>
            <p className="mt-4 text-xs text-green-700">Tip: Add the appointment to your calendar once you receive the confirmation.</p>
            <button onClick={() => setSubmitted(false)} className="mt-6 rounded-full bg-[#0a2540] px-5 py-2 text-sm font-medium text-white hover:bg-[#0c2e55]">Book Another Appointment</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#7a5a2e]">Private In‑Store Consultation</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0a2540] sm:text-3xl">Book Your Consultation</h2>
            <p className="mt-2 text-sm text-neutral-700">Select a preferred date and time. We’ll prepare designs from your chosen collection and assign a dedicated expert. No prices shown online to ensure personalized guidance.</p>
            <div className="mt-6 flex flex-col gap-3 rounded-xl bg-[#fff8e6] p-4 text-sm text-[#7a5a2e] ring-1 ring-[#b08d57]/30">
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Integrated Calendar: We’ll confirm and send reminders via SMS/Email.</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> Need assistance? Call us at <a href="tel:+919999999999" className="underline">+91 99999 99999</a>.</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-neutral-800">Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 ${errors.name ? "border-red-300 ring-2 ring-red-100" : "border-neutral-300 focus:border-[#0a2540] focus:ring-[#0a2540]/20"}`} placeholder="e.g., Ananya Sen" />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-800">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 ${errors.phone ? "border-red-300 ring-2 ring-red-100" : "border-neutral-300 focus:border-[#0a2540] focus:ring-[#0a2540]/20"}`} placeholder="e.g., +91 98xxxxxx" />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-800">Email (optional)</label>
                <input name="email" value={form.email} onChange={handleChange} className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 ${errors.email ? "border-red-300 ring-2 ring-red-100" : "border-neutral-300 focus:border-[#0a2540] focus:ring-[#0a2540]/20"}`} placeholder="name@example.com" />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-800">Preferred Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 ${errors.date ? "border-red-300 ring-2 ring-red-100" : "border-neutral-300 focus:border-[#0a2540] focus:ring-[#0a2540]/20"}`} />
                {errors.date && <p className="mt-1 text-xs text-red-600">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-800">Preferred Time</label>
                <input type="time" name="time" value={form.time} onChange={handleChange} className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 ${errors.time ? "border-red-300 ring-2 ring-red-100" : "border-neutral-300 focus:border-[#0a2540] focus:ring-[#0a2540]/20"}`} />
                {errors.time && <p className="mt-1 text-xs text-red-600">{errors.time}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-800">Collection Interest</label>
                <select name="interest" value={form.interest} onChange={handleChange} className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20">
                  <option>Gold</option>
                  <option>Diamond</option>
                  <option>Polki</option>
                  <option>Antique</option>
                  <option>Bridal</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800">
                  <input type="checkbox" name="bespoke" checked={form.bespoke} onChange={handleChange} className="h-4 w-4 rounded border-neutral-300 text-[#0a2540] focus:ring-[#0a2540]" />
                  Bespoke Jewellery Enquiry
                </label>
              </div>

              {form.bespoke && (
                <>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-neutral-800">Reference Image (optional)</label>
                    <label className="mt-1 flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-neutral-300 p-3 text-sm text-neutral-600 hover:bg-neutral-50">
                      <div className="flex items-center gap-2"><Upload className="h-4 w-4" /> Upload JPG/PNG/PDF</div>
                      <input type="file" name="file" onChange={handleChange} accept="image/*,.pdf" className="hidden" />
                      <span className="text-xs text-neutral-500">{form.file ? form.file.name : "Max 10MB"}</span>
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-neutral-800">Specifications</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20" placeholder="Metal purity, size, stone preferences, budget range, delivery date" />
                  </div>
                </>
              )}

              <div className="sm:col-span-2">
                <button type="submit" className="w-full rounded-full bg-[#0a2540] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c2e55]">
                  Request Booking & Reminders
                </button>
                <p className="mt-2 text-center text-xs text-neutral-500">By submitting, you agree to be contacted for appointment confirmation and reminders.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

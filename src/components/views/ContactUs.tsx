import { Phone } from "lucide-react";
import { useState } from "react";
import type React from "react";
import contactUsImg from "../../assets/contact-us.png";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();
      setSuccess("Thanks! Your message has been submitted.");
      setForm({ name: "", email: "", phone: "", message: "" });
      // Optionally log the fake response
      console.debug("Fake API response", data);
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0  overflow-hidden shadow-xl ">
          {/* Left: Red form panel */}
          <div className="bg-red-600 p-6 sm:p-8 md:p-10 lg:p-12 mx-auto">
            <div className="px-12">
              <p className="text-white/90 text-2xl tracking-widest font-semibold">
                LET'S TALK
              </p>
              <h2 className="mt-2 text-white text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
                Got an idea? Let's get in touch!
              </h2>
              <p className="mt-3 text-white/90 text-sm sm:text-base leading-relaxed md:text-xl">
                Have queries? Not sure of your App Strategy? Discuss with us and
                we will guide you the way forward.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-md bg-white text-gray-900 placeholder-gray-400 px-4 py-3 outline-none focus:ring-4 focus:ring-white/30"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md bg-white text-gray-900 placeholder-gray-400 px-4 py-3 outline-none focus:ring-4 focus:ring-white/30"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-md bg-white text-gray-900 placeholder-gray-400 px-4 py-3 outline-none focus:ring-4 focus:ring-white/30"
                />
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-md bg-white text-gray-900 placeholder-gray-400 px-4 py-3 outline-none focus:ring-4 focus:ring-white/30 resize-none"
                />
                {success && (
                  <p className="text-white text-sm bg-green-600/40 rounded px-3 py-2">{success}</p>
                )}
                {error && (
                  <p className="text-white text-sm bg-black/30 rounded px-3 py-2">{error}</p>
                )}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative w-full rounded-md bg-black/20 text-white font-semibold tracking-wider uppercase overflow-hidden disabled:opacity-60"
                  >
                    <span className="absolute inset-x-0 -top-3 h-16 bg-black/20" />
                    <span className="relative block px-6 py-3">
                      {loading ? "Submitting..." : "LET'S GET IN TOUCH"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Image with dark overlay and contact card */}
          <div className="relative min-h-[520px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${contactUsImg})` }}
            />
            <div className="absolute inset-0 " />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-[#262835]">
              <div className="">
                <p className="text-sm sm:text-base md:text-2xl text-center leading-relaxed text-white/90">
                  Please submit your inquiry and our App Development Strategist
                  will contact you shortly
                </p>
                <Phone className="mx-auto my-8" size={60} fill="white" />
                <div className="mt-5 mx-auto ">
                  <p className=" sm:text-xl font-bold tracking-wide text-center lg:text-5xl">
                    +1-(800) 826 8018
                  </p>
                  <p className="text-sm sm:text-base text-white/90 mt-1 text-center md:text-2xl">
                    info@appicoders.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

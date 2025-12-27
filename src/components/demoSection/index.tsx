import React, { useState } from "react";
import { DemoSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import RichText from "../commons/richText";

const DemoSection: React.FC<DemoSectionType> = ({
  title,
  heroImage,
  firstNameLabel,
  lastNameLabel,
  emailLabel,
  companyLabel,
  regionLabel,
  sourceLabel,
  disclaimer,
  submitButtonText,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    region: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (firstNameLabel && !formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (lastNameLabel && !formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (emailLabel && !formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (emailLabel && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (regionLabel && (!formData.region || formData.region === "Company Region")) newErrors.region = "Please select a region";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          region: "",
          message: "",
        });
        alert("Thank you! Your demo request has been sent successfully.");
      } else {
        setSubmitStatus("error");
        alert(`Failed to send request: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full bg-linear-to-b from-white via-green-200 to-purple-200 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* TITLE */}
        {title && (
          <h1 className="text-gray-800 text-4xl sm:text-5xl lg:text-4xl font-bold mb-16">
            {title}
          </h1>
        )}

        {/* MAIN FLEX LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          {/* ================= IMAGE ================= */}
          {heroImage && (
            <div className="order-1 lg:order-2 w-full lg:w-[60%] lg:mt-6 flex justify-center lg:justify-end">
              <div className="w-[280px] sm:w-[420px] lg:w-[560px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                <SanityImage src={heroImage} />
              </div>
            </div>
          )}

          {/* ================= FORM ================= */}
          <form 
            onSubmit={handleSubmit}
            className="order-2 lg:order-1 w-full lg:w-[60%] max-w-xl 
              bg-transparent shadow-xl shadow-black/30 
              rounded-2xl border-t border-gray-300/65 p-8"
          >


            {/* INPUT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {firstNameLabel && (
                <div>
                  <label className="block text-sm text-gray-900 mb-2">
                    {firstNameLabel}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your First name"
                    className={`w-full h-12 rounded-lg bg-white/55 px-4 text-gray-900 placeholder:text-gray-900/45 focus:outline-none focus:ring-2 ${errors.firstName ? 'ring-2 ring-red-400' : 'focus:ring-indigo-400'}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
              )}

              {lastNameLabel && (
                <div>
                  <label className="block text-sm text-gray-900 mb-2">
                    {lastNameLabel}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your Last name"
                    className={`w-full h-12 rounded-lg bg-white/55 px-4 text-gray-900 placeholder:text-gray-900/45 focus:outline-none focus:ring-2 ${errors.lastName ? 'ring-2 ring-red-400' : 'focus:ring-indigo-400'}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              )}

              {emailLabel && (
                <div>
                  <label className="block text-sm text-gray-900 mb-2">
                    {emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full h-12 rounded-lg bg-white/55 px-4 text-gray-900 placeholder:text-gray-900/45 focus:outline-none focus:ring-2 ${errors.email ? 'ring-2 ring-red-400' : 'focus:ring-indigo-400'}`}
                  />
                   {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              )}

              {companyLabel && (
                <div>
                  <label className="block text-sm text-gray-900 mb-2">
                    {companyLabel}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company"
                    className="w-full h-12 rounded-lg bg-white/55 px-4 text-gray-900 placeholder:text-gray-900/45 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              )}
            </div>

            {/* REGION */}
            {regionLabel && (
              <div className="mb-6">
                <label className="block text-sm text-gray-900 mb-2">
                  {regionLabel}
                </label>
                <select 
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className={`w-full h-12 rounded-lg bg-white/55 px-4 text-gray-900 focus:outline-none focus:ring-2 ${errors.region ? 'ring-2 ring-red-400' : 'focus:ring-indigo-400'}`}
                >
                  <option value="">Company Region</option>
                  <option value="Agra">Agra</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Ajmer">Ajmer</option>
                  <option value="Aligarh">Aligarh</option>
                  <option value="Amravati">Amravati</option>
                  <option value="Amritsar">Amritsar</option>
                  <option value="Asansol">Asansol</option>
                  <option value="Aurangabad">Aurangabad</option>
                  <option value="Bareilly">Bareilly</option>
                  <option value="Belagavi">Belagavi</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Bhavnagar">Bhavnagar</option>
                  <option value="Bhiwandi">Bhiwandi</option>
                  <option value="Bhopal">Bhopal</option>
                  <option value="Bhubaneswar">Bhubaneswar</option>
                  <option value="Bikaner">Bikaner</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Cuttack">Cuttack</option>
                  <option value="Dehradun">Dehradun</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Dhanbad">Dhanbad</option>
                  <option value="Durgapur">Durgapur</option>
                  <option value="Erode">Erode</option>
                  <option value="Faridabad">Faridabad</option>
                  <option value="Firozabad">Firozabad</option>
                  <option value="Ghaziabad">Ghaziabad</option>
                  <option value="Gorakhpur">Gorakhpur</option>
                  <option value="Gurugram">Gurugram</option>
                  <option value="Guwahati">Guwahati</option>
                  <option value="Gwalior">Gwalior</option>
                  <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Indore">Indore</option>
                  <option value="Jabalpur">Jabalpur</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Jalandhar">Jalandhar</option>
                  <option value="Jammu">Jammu</option>
                  <option value="Jamnagar">Jamnagar</option>
                  <option value="Jamshedpur">Jamshedpur</option>
                  <option value="Jhansi">Jhansi</option>
                  <option value="Jodhpur">Jodhpur</option>
                  <option value="Kannur">Kannur</option>
                  <option value="Kanpur">Kanpur</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Kolhapur">Kolhapur</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Kollam">Kollam</option>
                  <option value="Kota">Kota</option>
                  <option value="Kozhikode">Kozhikode</option>
                  <option value="Kurnool">Kurnool</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Ludhiana">Ludhiana</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Malappuram">Malappuram</option>
                  <option value="Mangaluru">Mangaluru</option>
                  <option value="Meerut">Meerut</option>
                  <option value="Moradabad">Moradabad</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Mysuru">Mysuru</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Nanded">Nanded</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Nellore">Nellore</option>
                  <option value="Noida">Noida</option>
                  <option value="Patna">Patna</option>
                  <option value="Pune">Pune</option>
                  <option value="Purulia">Purulia</option>
                  <option value="Prayagraj">Prayagraj</option>
                  <option value="Raipur">Raipur</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Ranchi">Ranchi</option>
                  <option value="Rourkela">Rourkela</option>
                  <option value="Salem">Salem</option>
                  <option value="Sangli">Sangli</option>
                  <option value="Siliguri">Siliguri</option>
                  <option value="Solapur">Solapur</option>
                  <option value="Srinagar">Srinagar</option>
                  <option value="Surat">Surat</option>
                  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                  <option value="Thrissur">Thrissur</option>
                  <option value="Tiruchirappalli">Tiruchirappalli</option>
                  <option value="Tirunelveli">Tirunelveli</option>
                  <option value="Tiruppur">Tiruppur</option>
                  <option value="Ujjain">Ujjain</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Varanasi">Varanasi</option>
                  <option value="Vasai-Virar">Vasai-Virar</option>
                  <option value="Vellore">Vellore</option>
                  <option value="Vijayawada">Vijayawada</option>
                  <option value="Visakhapatnam">Visakhapatnam</option>
                  <option value="Warangal">Warangal</option>
                </select>
                {errors.region && (
                  <p className="text-red-600 text-xs mt-1 font-medium">
                    {errors.region}
                  </p>
                )}
              </div>
            )}

            {/* SOURCE */}
            {sourceLabel && (
              <div className="mb-6">
                <label className="block text-sm text-gray-900 mb-2">
                  {sourceLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  className="w-full h-32 rounded-lg bg-white/55 px-4 py-3 text-gray-900 placeholder:text-gray-900/45 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            )}

            {/* DISCLAIMER */}
            {disclaimer && (
              <div className="text-xs text-gray-900 leading-relaxed mb-6">
                <RichText block={disclaimer} />
              </div>
            )}

            {/* SUBMIT BUTTON */}
            {submitButtonText?.label && (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full h-12 rounded-lg text-white bg-gray-800 font-semibold hover:text-white hover:bg-gray-800/60 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : submitButtonText.label}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

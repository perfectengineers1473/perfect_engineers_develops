"use client";

import React, { useState } from "react";
import { DemoSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import RichText from "../commons/richText";

const DemoSection: React.FC<DemoSectionType> = ({
  id,
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
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    region: "",
    source: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.company ||
      !form.region
    ) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/send-demo-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        region: "",
        source: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id={id}
      className="relative w-full py-10 sm:py-16 bg-white scroll-mt-24 lg:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-stretch">
          
          {/* LEFT: TEXT & IMAGE */}
          <div className="max-w-2xl flex flex-col h-full justify-between">
            <div>
              {title && (
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1f2937] sm:text-3xl lg:text-4xl mb-4">
                  {title}
                </h2>
              )}
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Fill out the form to request your personalized demo. Our engineers will get back to you within 24 hours to discuss how we can help.
              </p>
            </div>
            
            {heroImage && (
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white flex-1 relative min-h-[250px] w-full [&_img]:absolute [&_img]:inset-0 [&_img]:w-full [&_img]:h-full [&_img]:object-cover">
                <SanityImage src={heroImage} />
              </div>
            )}
          </div>

          {/* RIGHT: FORM CARD */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-sm flex flex-col h-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* INPUT GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {firstNameLabel && (
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1">
                      {firstNameLabel}
                    </label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      type="text"
                      className="block w-full h-9 rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm outline-none transition-colors bg-white"
                    />
                  </div>
                )}

                {lastNameLabel && (
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1">
                      {lastNameLabel}
                    </label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      type="text"
                      className="block w-full h-9 rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm outline-none transition-colors bg-white"
                    />
                  </div>
                )}

                {emailLabel && (
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1">
                      {emailLabel}
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      className="block w-full h-9 rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm outline-none transition-colors bg-white"
                    />
                  </div>
                )}

                {companyLabel && (
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1">
                      {companyLabel}
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      type="text"
                      className="block w-full h-9 rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm outline-none transition-colors bg-white"
                    />
                  </div>
                )}
              </div>

              {/* REGION */}
              {regionLabel && (
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1">
                    {regionLabel}
                  </label>
                  <select
                    name="region"
                    value={form.region}
                    onChange={handleChange}
                    className="block w-full h-9 rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm outline-none transition-colors bg-white"
                  >
                    <option value="" disabled>Select region</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Europe">Europe</option>
                  </select>
                </div>
              )}

              {/* MESSAGE */}
              {sourceLabel && (
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1">
                    {sourceLabel}
                  </label>
                  <textarea
                    name="source"
                    value={form.source}
                    onChange={handleChange}
                    rows={3}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm outline-none transition-colors bg-white resize-none"
                  />
                </div>
              )}

              {/* ERROR / SUCCESS */}
              {error && (
                <div className="rounded-md bg-red-50 p-3">
                  <p className="text-sm font-medium text-red-800">{error}</p>
                </div>
              )}
              {success && (
                <div className="rounded-md bg-green-50 p-3">
                  <p className="text-sm font-medium text-green-800">
                    Form submitted successfully! We'll be in touch.
                  </p>
                </div>
              )}

              {/* SUBMIT */}
              {submitButtonText?.label && (
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 transition-colors"
                  >
                    {loading ? "Sending..." : submitButtonText.label}
                  </button>
                </div>
              )}
              
              {/* DISCLAIMER */}
              {disclaimer && (
                <div className="text-[11px] text-gray-500 mt-3 text-center leading-tight">
                  <RichText block={disclaimer} />
                </div>
              )}
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

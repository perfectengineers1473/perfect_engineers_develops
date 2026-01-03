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
      className="relative w-full bg-linear-to-b from-white via-green-200 to-purple-200 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* TITLE */}
        {title && (
          <h1 className="text-gray-800 text-4xl sm:text-5xl lg:text-4xl font-bold mb-16">
            {title}
          </h1>
        )}

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* IMAGE */}
          {heroImage && (
            <div className="order-1 lg:order-2 w-full lg:w-[60%] flex justify-center lg:justify-end">
              <div className="w-[280px] sm:w-[420px] lg:w-[560px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                <SanityImage src={heroImage} />
              </div>
            </div>
          )}

          {/* FORM */}
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
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full h-12 rounded-lg bg-white/55 px-4 focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              )}

              {lastNameLabel && (
                <div>
                  <label className="block text-sm text-gray-900 mb-2">
                    {lastNameLabel}
                  </label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full h-12 rounded-lg bg-white/55 px-4 focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              )}

              {emailLabel && (
                <div>
                  <label className="block text-sm text-gray-900 mb-2">
                    {emailLabel}
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 rounded-lg bg-white/55 px-4 focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              )}

              {companyLabel && (
                <div>
                  <label className="block text-sm text-gray-900 mb-2">
                    {companyLabel}
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your company"
                    className="w-full h-12 rounded-lg bg-white/55 px-4 focus:ring-2 focus:ring-indigo-400"
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
                  value={form.region}
                  onChange={handleChange}
                  className="w-full h-12 rounded-lg bg-white/55 px-4"
                >
                  <option value="">Select region</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Europe">Europe</option>
                </select>
              </div>
            )}

            {/* MESSAGE */}
            {sourceLabel && (
              <div className="mb-6">
                <label className="block text-sm text-gray-900 mb-2">
                  {sourceLabel}
                </label>
                <textarea
                  name="source"
                  value={form.source}
                  onChange={handleChange}
                  placeholder="Type your message"
                  className="w-full h-32 rounded-lg bg-white/55 px-4 py-3"
                />
              </div>
            )}

            {/* DISCLAIMER */}
            {disclaimer && (
              <div className="text-xs text-gray-900 mb-6">
                <RichText block={disclaimer} />
              </div>
            )}

            {/* ERROR / SUCCESS */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {success && (
              <p className="text-green-600 text-sm mb-4">
                Form submitted successfully!
              </p>
            )}

            {/* SUBMIT */}
            {submitButtonText?.label && (
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : submitButtonText.label}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

import React from "react";
import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { fetchDataFromSanity } from "../../lib/sanity";
import {
  footerquery,
  footerbottomquery,
  headerquery,
  navlinkSectionquery,
} from "../../lib/queries";
import { REVALIDATE_DURATION } from "../../lib/constants";

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Perfect Engineers</title>
        <meta name="description" content="Privacy Policy for Perfect Engineers." />
      </Head>

      <div className="bg-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#343e4b] transition-colors bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg border border-gray-200">
              <FiArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </div>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
              Privacy Policy
            </h1>
            <div className="w-16 h-1 bg-[#343e4b] mx-auto mb-6"></div>
            <p className="text-base text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-8 sm:p-12 shadow-sm rounded text-gray-600 space-y-8 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-semibold text-[#1f2937] mb-3">1. Introduction</h2>
              <p>
                At Perfect Engineers, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights. We ensure that our data collection practices are transparent and secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f2937] mb-3">2. The Data We Collect About You</h2>
              <p className="mb-2">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong className="text-gray-800">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong className="text-gray-800">Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong className="text-gray-800">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                <li><strong className="text-gray-800">Usage Data:</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f2937] mb-3">3. How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1f2937] mb-3">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f2937] mb-3">5. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f2937] mb-3">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-6 p-6 bg-gray-50 border border-gray-100 rounded-lg shadow-inner">
                <p className="font-semibold text-[#1f2937] text-lg mb-1">Perfect Engineers</p>
                <p className="mb-1">Email: <a href="mailto:info@perfectengineers.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">info@perfectengineers.com</a></p>
                <p>Location: Ahmedabad, Gujarat, India</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

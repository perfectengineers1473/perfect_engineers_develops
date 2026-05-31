import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import Link from "next/link";
import { FiMail, FiUser, FiCode, FiArrowLeft } from "react-icons/fi";

const PoweredBy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Powered By | Developer Information</title>
        <meta name="description" content="Website development information." />
      </Head>

      <div className="bg-white py-4 sm:py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-250px)]">
        <div className="max-w-4xl w-full">
          <div className="mb-4">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#343e4b] transition-colors bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg border border-gray-200">
              <FiArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1f2937] mb-3">
              Powered By
            </h1>
            <div className="w-12 h-1 bg-[#343e4b] mx-auto mb-4"></div>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              This platform was designed and developed with a focus on performance, scalability, and delivering a seamless user experience.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 max-w-2xl mx-auto shadow-sm rounded">
            <h2 className="text-lg font-semibold text-[#1f2937] mb-4 border-b border-gray-200 pb-3">
              Developer Contact Information
            </h2>

            <div className="space-y-3">
              {/* Vinit Modi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center p-3 bg-white border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-[#343e4b] border border-gray-200 rounded">
                    <FiUser className="w-4 h-4" />
                  </div>
                  <div className="ml-4">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Developer</p>
                    <p className="text-sm font-bold text-gray-900">Vinit Modi</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-[#343e4b] border border-gray-200 rounded">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <div className="ml-4 overflow-hidden">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Email Inquiry</p>
                    <a href="mailto:vinit.modi8722@gmail.com" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors truncate block">
                      vinit.modi8722@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Prem Hingu */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center p-3 bg-white border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-[#343e4b] border border-gray-200 rounded">
                    <FiUser className="w-4 h-4" />
                  </div>
                  <div className="ml-4">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Developer</p>
                    <p className="text-sm font-bold text-gray-900">Prem Hingu</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-[#343e4b] border border-gray-200 rounded">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <div className="ml-4 overflow-hidden">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Email Inquiry</p>
                    <a href="mailto:hinguprem007@gmail.com" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors truncate block">
                      hinguprem007@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Om Vaghela */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center p-3 bg-white border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-[#343e4b] border border-gray-200 rounded">
                    <FiUser className="w-4 h-4" />
                  </div>
                  <div className="ml-4">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Developer</p>
                    <p className="text-sm font-bold text-gray-900">Om Vaghela</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-[#343e4b] border border-gray-200 rounded">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <div className="ml-4 overflow-hidden">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Email Inquiry</p>
                    <a href="mailto:om.vaghela@gmail.com" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors truncate block">
                      om.vaghela@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500">
                Dedicated to building robust and professional digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoweredBy;

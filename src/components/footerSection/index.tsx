/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FooterBottomType, FooterType } from "../../../lib/sanity/types";

const FooterSection = ({
  data,
  footerbottomdata,
}: {
  data: FooterType[];
  footerbottomdata: FooterBottomType[];
}) => {
  return (
    <div className="flex justify-center mt-5 px-4">
      <div className="bg-black/90 dark:bg-yellow-300/80 h-auto lg:h-[475px] w-full max-w-[1440px] mb-10 rounded-2xl text-white pl-4 pb-4 pr-4 dark:text-black">
        <div className="flex justify-center">
          <div className="flex flex-col items-center lg:items-center">
            {data.map((item, index) => (
              <div key={index} className="text-center lg:text-center">
                <div className="mt-[40px] lg:mt-[65px] text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  {item.title}
                </div>
                <div className="mt-4 w-full max-w-[850px] mx-auto lg:mx-0 text-center lg:text-center font-normal">
                  {item.titletext}
                </div>

                <div className="mt-6 flex justify-center lg:justify-center">
                  <div className="flex items-center bg-white text-black w-full max-w-[383px] h-[53px] rounded-md">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="py-2 border-b-[1px] w-full ml-2 border-black focus:outline-none bg-transparent placeholder-opacity-50 text-black"
                    />
                    <div className="flex justify-end w-full mr-2">
                      <button className="h-[37px] w-[94px] rounded-md bg-black/90 text-white font-semibold transition duration-300">
                        {item.btn.label}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-center mt-4">
                  {item.sociallogolink.map((socialItem, index) => (
                    <div key={index} className="mx-2">
                      <a
                        href={socialItem.sociallogolink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={socialItem.sociallogo.asset.url}
                          alt="logo"
                          className="h-[25px] w-[25px] mt-4"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[50px] lg:mt-[100px] border-t-2">
          {footerbottomdata.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[400px] mt-4 lg:mt-[20px] font-semibold"
            >
              <div>{item.leftsidetext}</div>
              <div className="underline">{item.centertextlink}</div>
              <div>
                <span>
                  {item.rightsidetext.slice(
                    0,
                    Math.floor(item.rightsidetext.length / 1.6)
                  )}
                </span>
                <span className="underline">
                  {item.rightsidetext.slice(
                    Math.floor(item.rightsidetext.length / 1.6)
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSection;

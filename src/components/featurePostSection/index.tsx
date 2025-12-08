/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FeaturedPostType } from "../../../lib/sanity/types";

const FeaturePostSection = ({ data }: { data: FeaturedPostType[] }) => {
  return (
    <div className="max-w-[1440px] w-full p-2 mx-auto">
      <div className="gap-8 relative -mb-[110px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col  lg:flex-row lg:space-x-6"
          >
            <div className="mr-5">
              <div className="absolute lg:mt-[100px] mt-[50px] ml-[20px] lg:ml-[110px] font-semibold text-xl lg:text-4xl dark:text-white">
                {item.maintitle}
              </div>
              <div className="relative group w-full lg:w-[620px] h-[300px] lg:h-[417px] mt-[120px] lg:mt-[200px] ml-[20px] lg:ml-[110px] lg:mr-5 mx-auto overflow-hidden rounded-xl">
                <img
                  src={item.image.asset.url}
                  alt="image"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b w-full from-transparent to-black/85 rounded-xl"></div>
                <div className="absolute bottom-3 ml-2 p-6 text-white">
                  <span className="inline-block sm:px-10 bg-black/90 rounded-full capitalize font-semibold border-solid border-white hover:scale-105 transition-all ease duration-200 text-sm sm:text-base px-6 py-1 sm:py-2 border">
                    <a href={item.buttonUrl}>{item.buttonText}</a>
                  </span>
                  <h2 className="mt-3 text-lg lg:text-2xl font-bold">
                    <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_5px] group-hover:bg-[length:100%_5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                      {item.title}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="mt-[25px] lg:mt-[205px] ml-[20px] lg:ml-[26px] flex flex-col md:flex-col lg:flex-col">
              {item.features.map((featureItem, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-col md:flex-row lg:flex-row group mb-5 "
                >
                  <div className=" overflow-hidden rounded-xl">
                    <img
                      src={featureItem.featureImage.asset.url}
                      className=" object-cover rounded-xl lg:h-[195px] lg:w-[295px] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="ml-[15px] lg:ml-[20px] mt-[15px] lg:mt-[33px] w-full ">
                    <div className="text-[#7b00d4] uppercase text-xs font-semibold mb-2 dark:text-yellow-300">
                      {featureItem.type}
                    </div>
                    <div className="capitalize font-semibold mb-2 text-lg lg:text-xl dark:text-white">
                      <span className="bg-gradient-to-r from-purple-500 to-purple-500 dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_5px] group-hover:bg-[length:100%_5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                        {featureItem.title}
                      </span>
                    </div>
                    <div className="dark:text-gray-300 text-sm lg:text-base">
                      {featureItem.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturePostSection;

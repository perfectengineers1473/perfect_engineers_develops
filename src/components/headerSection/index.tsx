/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HeaderType } from "../../../lib/sanity/types";

const HeaderSection = ({ data }: { data: HeaderType[] }) => {
  return (
    <div className="flex justify-center ml-4 mr-2 ">
      <div className="h-[70px] w-[1400px] relative mt-4">
        <div>
          {data.map((item, index) => (
            <div key={index} className="flex">
              <div className="flex justify-center items-center -ml-3 -mt-2">
                <div className="w-16 overflow-hidden dark:border-white/80 mr-2 md:mr-4">
                  <img src={item.logo.asset.url} alt="logo" />
                </div>
                <div className="font-semibold text-lg md:text-xl relative group -ml-5">
                  <span className="relative inline-block after:absolute dark:text-white/80 after:bg-blue-500 after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-2000 group-hover:after:w-full hover:text-red-600 dark:hover:text-yellow-400">
                    {item.logotitle}
                  </span>
                </div>
              </div>
              <div className="flex justify-end w-full items-center x:flex hidden">
                {item.sociallogolink.map((item, inded) => (
                  <a
                    key={inded}
                    href={item.sociallogolink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[40px]">
                      <img
                        src={item.sociallogo.asset.url}
                        alt="Social Logo"
                        className="h-7 w-7 hover:h-9 hover:w-8"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;

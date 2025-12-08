/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HomeHeroSectionType } from "../../../lib/sanity/types";

const HomeHeroSection = ({ data }: { data: HomeHeroSectionType[] }) => {
  return (
    <div className="w-full">
      {data.map((item, index) => (
        <article
          key={index}
          className="flex flex-col items-start justify-end relative h-[595px]  mx-5  bg-cover bg-center rounded-3xl overflow-hidden"
          style={{ backgroundImage: `url(${item.bgimage.asset.url})` }}
        >
          <div className=""></div>

          <img
            alt={item.title}
            decoding="async"
            className="absolute inset-0 w-full h-full object-center  object-cover -z-10"
            src={item.bgimage.asset.url}
          />

          <div className="w-fit sm:w-3/4 px-5 x:px- md:px-16 py-10 sm:py-16 flex flex-col items-start justify-center z-10 text-white">
            {item.btn && (
              <a
                className="inline-block py-2 sm:py-3 px-8 sm:px-10 bg-black/60 text-white rounded-full capitalize font-semibold border border-white hover:scale-105 transition-all ease duration-200 text-sm sm:text-base"
                href="#"
              >
                {item.btn.label}
              </a>
            )}

            <a className="mt-4 sm:mt-6 group" href={`/blogs/${item.title}`}>
              <h1 className="font-bold capitalize text-3xl sm:text-2xl xsss:text:xs xss:text-xl md:text-5xl text-white">
                <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
                  {item.title}
                </span>
              </h1>
            </a>

            <p className="mt-3 sm:mt-4 text-base sm:text-xl text-white">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default HomeHeroSection;

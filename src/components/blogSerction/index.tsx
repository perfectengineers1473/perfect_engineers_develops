/* eslint-disable @next/next/no-img-element */

import React from "react";
import { RecentPostType } from "../../../lib/sanity/types";

const BlogSerction = ({ data }: { data: RecentPostType[] }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-[125px] mt-[150px] sm:mt-[200px] lg:mt-[235px]">
      {data.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-center flex-col sm:flex-row">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-[40px] dark:text-white">
              {item.title}
            </h2>
            <a
              href="#"
              className="text-purple-600 text-base sm:text-lg lg:text-xl mb-3 sm:mb-5 underline dark:text-yellow-300"
            >
              {item.seemore}
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[40px] lg:gap-[60px] mt-6 sm:mt-8">
            {item.blog.map((blogItem, blogIndex) => (
              <div
                key={blogIndex}
                className="bg-white dark:bg-transparent group"
              >
                <img
                  src={blogItem.image.asset.url}
                  alt="blog"
                  className="w-full object-cover rounded-2xl bg-transparent"
                />
                <div className="p-4">
                  <span className="text-purple-600 dark:text-yellow-300 font-semibold uppercase text-xs sm:text-sm">
                    {blogItem.type}
                  </span>
                  <h3 className="text-base sm:text-lg lg:text-[18px] dark:text-white font-semibold mt-2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-500 dark:from-accentDark/50  dark:to-accentDark/50 bg-[length:0px_5px] group-hover:bg-[length:100%_5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                      {blogItem.blogtitle}
                    </span>
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2">
                    {blogItem.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSerction;

import React from "react";
import { RecentPostSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";



const RecentPostSection: React.FC<RecentPostSectionType> = ({
  blog,title,seemore
}) => {


  return (
      <div className="container  bg-lime-600 max-w-full text-4xl h-[600px]">
        <div className="flex flex-col items-center gap-4 max-w-[1920px] w-full mx-auto">
          {title}
          </div>
          {seemore}
          <div>
            {blog?.map((item,index)=>(
              <div key={index}>
                  {item?.blogtitle}
                  {item?.date}
                  {item?.type}
                  {item?.image && (
            <div className="w-full h-full">
              <SanityImage src={item?.image} />
            </div>
          )}

              </div>
            ))}
          </div>
        </div>
  );
};

export default RecentPostSection;

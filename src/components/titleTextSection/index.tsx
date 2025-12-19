import React from "react";
import { TitleTextSectionType } from "../../../lib/sanity/types/page";
import RichText from "../commons/richText";



const TitleTextSection: React.FC<TitleTextSectionType> = ({
  titleText
}) => {


  return (
      <div className="container bg-fuchsia-700 max-w-full h-[500px] justify-center items-center flex">
        <div className="flex flex-col items-center gap-4 max-w-[1920px] w-full mx-auto">
          {titleText?.map((item,index)=>(
            <div key={index}>
              {item?.title}
              {item?.description && (
            <div className="text-white text-center">
              <RichText block={item?.description} />
            </div>
          )}
            </div>
          ))}
          </div>
        </div>
  );
};

export default TitleTextSection;

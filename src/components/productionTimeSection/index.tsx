import React from "react";
import { ProductionTimeSectionType } from "../../../lib/sanity/types/page";



const ProductionTimeSection: React.FC<ProductionTimeSectionType> = ({
  Production,buttons
}) => {


  return (
      <div className="container bg-sky-300 max-w-full h-[500px] justify-center items-center flex">
        <div className="flex flex-col items-center gap-4 max-w-[1920px] w-full mx-auto">
          {Production?.map((item,index)=>(
            <div key={index}>
              {item?.label}
              {item?.value}
            </div>
          ))}
          {buttons?.map((item, index) => (
            <a
              key={index}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              {item.label}
            </a>
          ))}
          </div>
        </div>
  );
};

export default ProductionTimeSection;

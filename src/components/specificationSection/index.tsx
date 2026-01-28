import { SpecificationSectionType } from "lib/sanity/types/page";
import React from "react";

const SpecificationSection: React.FC<SpecificationSectionType> = ({
  headline,
  description,
  categories,
}) => {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          {headline && (
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {headline}
            </h2>
          )}
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Render each Category as a separate Table */}
        <div className="flex flex-col gap-12">
          {categories.map((category, categoryIndex) => (
            <div
              key={category._key ?? `category-${categoryIndex}`}
              className="w-full overflow-x-auto"
            >
              {/* Table Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 pl-2 border-l-4 border-blue-600">
                {category.title}
              </h3>

              {/* Responsive Table Wrapper: allow horizontal scroll via table min-width on small screens */}
              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm max-w-full">
                <table className="w-full text-sm text-left border-collapse min-w-[900px] md:min-w-full">
                  
                  {/* TABLE HEADERS */}
                  <thead className="bg-gray-100 text-gray-700 font-bold uppercase text-xs">
                    <tr>
                      {/* 1st Col: Model */}
                      <th rowSpan={2} className="px-4 py-3 border-b border-r border-gray-200 w-1/6">
                        Model
                      </th>
                      {/* 2nd Col: Cooling Capacity */}
                      <th rowSpan={2} className="px-4 py-3 border-b border-r border-gray-200 w-1/6">
                        Cooling Capacity <br />
                        <span className="text-[10px] text-gray-500 normal-case">
                          (Approx)
                        </span>
                      </th>
                      <th rowSpan={2} className="px-4 py-3 border-b border-r border-gray-200 w-1/6">
                        Storage Capacity
                      </th>
                      <th colSpan={3} className="px-4 py-2 border-b border-r border-gray-200 text-center w-1/4">
                        Approx Dimension (mm)
                      </th>
                      <th rowSpan={2} className="px-4 py-3 border-b border-gray-200 w-1/6 text-center">
                        No. of Faucets
                      </th>
                    </tr>
                    <tr>
                      <th className="px-2 py-2 border-b border-r border-gray-200 text-center bg-gray-50">
                        Height
                      </th>
                      <th className="px-2 py-2 border-b border-r border-gray-200 text-center bg-gray-50">
                        Depth
                      </th>
                      <th className="px-2 py-2 border-b border-r border-gray-200 text-center bg-gray-50">
                        Width
                      </th>
                    </tr>
                  </thead>

                  {/* TABLE BODY */}
                  <tbody className="bg-white">
                    {category.items?.map((item, itemIndex) => (
                      <tr 
                        key={item._key ?? `${item.model ?? "item"}-${itemIndex}`}
                        className={`hover:bg-blue-50/50 transition-colors ${
                          itemIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-4 py-3 border-b border-r border-gray-100 font-medium text-gray-900">
                          {item.model || "-"}
                        </td>
                        <td className="px-4 py-3 border-b border-r border-gray-100 text-gray-600">
                          {item.coolingCapacity || "-"}
                        </td>
                        <td className="px-4 py-3 border-b border-r border-gray-100 text-gray-600">
                          {item.storageCapacity || "-"}
                        </td>
                        <td className="px-2 py-3 border-b border-r border-gray-100 text-center text-gray-600">
                          {item.height || "-"}
                        </td>
                        <td className="px-2 py-3 border-b border-r border-gray-100 text-center text-gray-600">
                          {item.depth || "-"}
                        </td>
                        <td className="px-2 py-3 border-b border-r border-gray-100 text-center text-gray-600">
                          {item.width || "-"}
                        </td>
                        <td className="px-4 py-3 border-b border-gray-100 text-center font-medium text-gray-900">
                          {item.faucets || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecificationSection;

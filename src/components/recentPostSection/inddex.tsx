import React from "react";
import { RecentPostSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";

const RecentPostSection: React.FC<RecentPostSectionType> = ({
  blog, title, seemore
}) => {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 lg:mb-16">
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-0">
              {title}
            </h2>
          )}
          {seemore && (
            <p className="text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer">
              {seemore} →
            </p>
          )}
        </div>

        {/* Blog Grid */}
        {blog && blog.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blog.map((item, index) => {
              // Different background patterns for each card matching the design
              const bgPatterns = [
                'bg-gradient-to-br from-green-50 via-green-100 to-green-200',
                'bg-gradient-to-br from-pink-100 via-pink-200 to-orange-200',
                'bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300'
              ];
              const bgPattern = bgPatterns[index % bgPatterns.length];
              
              return (
                <article
                  key={index}
                  className={`${bgPattern} aspect-square p-8 flex flex-col justify-between relative overflow-hidden`}
                >
                  {item?.image && (
                    <div className="absolute inset-0 opacity-10">
                      <SanityImage src={item.image} />
                    </div>
                  )}
                  <div className="relative z-10 flex flex-col h-full">
                    {item?.type && (
                      <p className="text-xs uppercase tracking-wider text-gray-800 font-semibold mb-3">
                        {item.type}
                      </p>
                    )}
                    {item?.blogtitle && (
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex-1">
                        {item.blogtitle}
                      </h3>
                    )}
                    {item?.date && (
                      <p className="text-sm text-gray-700 mt-auto">
                        {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentPostSection;

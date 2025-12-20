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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 lg:mb-16 animate-fade-in-up">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blog.map((item, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                {item?.image && (
                  <div className="relative w-full h-64 overflow-hidden">
                    <SanityImage src={item.image} />
                  </div>
                )}
                <div className="p-6">
                  {item?.type && (
                    <p className="text-xs uppercase tracking-wider text-blue-600 font-semibold mb-2">
                      {item.type}
                    </p>
                  )}
                  {item?.blogtitle && (
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {item.blogtitle}
                    </h3>
                  )}
                  {item?.date && (
                    <p className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentPostSection;

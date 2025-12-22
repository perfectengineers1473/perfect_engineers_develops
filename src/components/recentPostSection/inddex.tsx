import React, { useRef } from "react";
import { RecentPostSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import { SlArrowRight, SlArrowLeft  } from "react-icons/sl";

const RecentPostSection: React.FC<RecentPostSectionType> = ({
  blog,
  title,
  seemore,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 360; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              {title}
            </h2>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <SlArrowLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <SlArrowRight />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        {blog && blog.length > 0 && (
          <div
            ref={scrollRef}
            className="
              flex gap-6 overflow-x-auto no-scrollbar
              scroll-smooth snap-x snap-mandatory
            "
          >
            {blog.map((item, index) => {
              const bgPatterns = [
                "bg-gradient-to-br from-green-50 to-green-200",
                "bg-gradient-to-br from-pink-100 to-orange-200",
                "bg-gradient-to-br from-orange-100 to-orange-300",
              ];

              return (
                <article
                  key={index}
                  className={`
                    ${bgPatterns[index % bgPatterns.length]}
                    min-w-[300px] sm:min-w-[340px] lg:min-w-[360px]
                    h-[360px]
                    snap-start
                    rounded-2xl p-6
                    flex flex-col justify-between
                    relative overflow-hidden
                    transition-transform duration-300
                    hover:scale-[1.03]
                  `}
                >
                  {item?.image && (
                    <div className="absolute inset-0 opacity-10">
                      <SanityImage src={item.image} />
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    {item?.type && (
                      <p className="text-xs uppercase tracking-wider font-semibold mb-3">
                        {item.type}
                      </p>
                    )}

                    {item?.blogtitle && (
                      <h3 className="text-xl font-bold mb-4 flex-1">
                        {item.blogtitle}
                      </h3>
                    )}

                    {item?.date && (
                      <p className="text-sm text-gray-700">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
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

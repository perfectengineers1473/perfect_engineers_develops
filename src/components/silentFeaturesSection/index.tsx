"use client";

import React, { useEffect, useRef, useState } from "react";
import SanityImage from "../commons/sanityImage";

interface LogoItem {
  _key: string;
  logoImage: any;
}

interface SilentFeaturesProps {
  title?: string;
  logo?: LogoItem[];
}

const SilentFeaturesSection: React.FC<SilentFeaturesProps> = ({
  title,
  logo = [],
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;
    setTrackWidth(trackRef.current.scrollWidth / 2);
  }, [logo]);

  if (!logo.length) return null;

  return (
    <section className="pb-7 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {title && (
          <div className="flex justify-center mb-8">
            <h2 className="text-2xl font-bold text-center px-8 py-4 w-screen text-gray-600 border border-gray-300 rounded-b-2xl bg-gray-300/60">
              {title}
            </h2>
          </div>
        )}

        <div className="relative w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-10 px-10 w-max marquee-track"
            style={{
              ["--marquee-distance" as any]: `-${trackWidth}px`,
            }}
          >
            {[...logo, ...logo].map((item, index) => (
              <div
                key={`${item._key}-${index}`}
                className="w-20 h-20 flex items-center justify-center shrink-0"
              >
                {item.logoImage && (
                  <SanityImage
                    src={item.logoImage}
                    alt="Feature Logo"
                    width={80}
                    height={80}
                    quality={40}
                    loading="lazy"
                    decoding="async"
                    className="object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(var(--marquee-distance));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default SilentFeaturesSection;

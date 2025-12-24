"use client";

import React, { useEffect, useRef, useState } from "react";
import { ProductionTimeSectionType } from "../../../lib/sanity/types/page";
import Link from "../commons/link";

const ProductionTimeSection: React.FC<ProductionTimeSectionType> = ({
  Production,
  buttons,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  // Start animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full lg:h-screen flex justify-center items-center py-24 bg-linear-to-br from-white via-purple-800/45 to-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] bg-indigo-400/30 rounded-full blur-3xl" />

      <div className="relative container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">

          {/* ================= STATS ================= */}
          {Production && Production.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 mb-16 w-full">
              {Production.map((item, index) => {
                const value = Number(item?.value?.replace(/[^0-9]/g, "")) || 0;
                const suffix = item?.value?.replace(/[0-9]/g, "") || "";

                return (
                  <StatCard
                    key={index}
                    value={value}
                    suffix={suffix}
                    label={item.label}
                    start={startCount}
                    delay={index * 150}
                  />
                );
              })}
            </div>
          )}          
        </div>
      </div>
    </section>
  );
};

export default ProductionTimeSection;


interface StatCardProps {
  value: number;
  suffix: string;
  label?: string;
  start: boolean;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  suffix,
  label,
  start,
  delay,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 1500;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    setTimeout(() => requestAnimationFrame(animate), delay);
  }, [start, value, delay]);

  return (
    <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-10 sm:p-16 lg:p-24 shadow-2xl border border-white/20 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up">
      {/* VALUE */}
      <div className="flex items-baseline justify-center gap-1 text-white mb-4">
        <span className="text-6xl sm:text-7xl lg:text-8xl font-extrabold">
          {count}
        </span>
        <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/70">
          {suffix}
        </span>
      </div>

      {/* LABEL */}
      {label && (
        <p className="text-base sm:text-lg text-white/80 max-w-xs mx-auto">
          {label}
        </p>
      )}
    </div>
  );
};

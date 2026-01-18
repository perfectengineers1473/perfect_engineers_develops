"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import { ProductionTimeSectionType } from "../../../lib/sanity/types/page";

const ProductionTimeSection: React.FC<ProductionTimeSectionType> = ({
  Production,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full lg:h-screen flex items-center justify-center py-24 bg-linear-to-br from-white via-purple-800/40 to-white overflow-hidden"
    >
      {/* Optimized background blur */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-400/20 rounded-full blur-2xl" />
      <div className="absolute top-1/2 -right-24 w-72 h-72 bg-indigo-400/20 rounded-full blur-2xl" />

      <div className="relative container mx-auto max-w-7xl px-6">
        {Production && Production.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
            {Production.map((item, index) => {
              const value = Number(item?.value?.replace(/\D/g, "")) || 0;
              const suffix = item?.value?.replace(/[0-9]/g, "") || "";

              return (
                <StatCard
                  key={index}
                  value={value}
                  suffix={suffix}
                  label={item.label}
                  delay={index * 200}
                  visible={visible}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductionTimeSection;

interface StatCardProps {
  value: number;
  suffix: string;
  label?: string;
  delay: number;
  visible: boolean;
}

const StatCard = memo(function StatCard({
  value,
  suffix,
  label,
  delay,
  visible,
}: StatCardProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [visible, delay]);

  return (
    <div
      className={`bg-white/15 backdrop-blur-lg rounded-3xl p-10 sm:p-16 lg:p-24 shadow-xl border border-white/20
      transition-all duration-700 will-change-transform
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* VALUE */}
      <div className="flex items-baseline justify-center gap-1 text-white mb-4">
        <span className="text-6xl sm:text-7xl lg:text-8xl font-extrabold">
          {show ? value : 0}
        </span>
        <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/70">
          {suffix}
        </span>
      </div>

      {/* LABEL */}
      {label && (
        <p className="text-base sm:text-lg text-white/80 max-w-xs mx-auto text-center">
          {label}
        </p>
      )}
    </div>
  );
});

StatCard.displayName = "StatCard";

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
      className="relative w-full py-24 bg-gray-50 overflow-hidden"
    >
      <div className="relative container mx-auto max-w-7xl px-6 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4 tracking-tight">
            Our Impact By The Numbers
          </h2>
          <div className="w-16 h-1 bg-[#343e4b] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              value: "22Days",
              label: "Average Mean Time To Remediate (MTTR)",
            },
            {
              value: "80%",
              label: "Reduction in time spent on manual patching",
            },
            {
              value: "20$K+",
              label: "In savings by consolidating tools",
            },
          ].map((item, index) => {
            const value = Number(item.value.replace(/\D/g, "")) || 0;
            const suffix = item.value.replace(/[0-9]/g, "");

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
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [visible, delay]);

  useEffect(() => {
    if (!show) return;
    
    // Counting animation logic
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds animation
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo curve for smooth deceleration
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setDisplayValue(Math.floor(easeOut * value));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [show, value]);

  return (
    <div
      className={`bg-white rounded-2xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100
      hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 ease-out flex flex-col items-center justify-center
      ${show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
    >
      {/* VALUE */}
      <div className="flex items-baseline justify-center gap-1 mb-4">
        <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-blue-600">
          {displayValue}
        </span>
        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#343e4b]">
          {suffix}
        </span>
      </div>

      {/* LABEL */}
      {label && (
        <p className="text-sm sm:text-base text-gray-600 max-w-[200px] mx-auto text-center leading-relaxed font-medium">
          {label}
        </p>
      )}
    </div>
  );
});

StatCard.displayName = "StatCard";

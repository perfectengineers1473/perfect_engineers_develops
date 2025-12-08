/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../darkmodeSection/iconsection";

const DarkmodeSection: React.FC = () => {
  const [theme, setTheme] = useState<string>("dark");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const element = document.documentElement;
      const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const storedTheme = localStorage.getItem("theme") || "dark";
      setTheme(storedTheme);

      const onWindowMatch = () => {
        if (
          localStorage.getItem("theme") === "dark" ||
          (!("theme" in localStorage) && darkQuery.matches)
        ) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
      };

      onWindowMatch();

      const handleThemeChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem("theme")) {
          if (e.matches) {
            element.classList.add("dark");
          } else {
            element.classList.remove("dark");
          }
        }
      };

      darkQuery.addEventListener("change", handleThemeChange);

      return () => darkQuery.removeEventListener("change", handleThemeChange);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const element = document.documentElement;

      switch (theme) {
        case "dark":
          element.classList.add("dark");
          localStorage.setItem("theme", "dark");
          break;
        case "light":
          element.classList.remove("dark");
          localStorage.setItem("theme", "light");
          break;
        default:
          localStorage.removeItem("theme");
          break;
      }
    }
  }, [theme, isMounted]);

  return (
    <div>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="bg-white  duration-200 p-1 h-[26px] w-[26px] rounded-full text-black border"
        >
          <MoonIcon />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="bg-black duration-200 p-1  h-[26px] w-[26px] rounded-full text-white border"
        >
          <SunIcon />
        </button>
      )}
    </div>
  );
};

export default DarkmodeSection;

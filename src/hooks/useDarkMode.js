import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const nextTheme = theme === "dark" ? "light" : "dark";
    const themeColor = theme === "dark" ? "#0F172A" : "#FFFFFF";

    root.classList.remove(nextTheme);
    root.classList.add(theme);
    root.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", themeColor);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return [theme, toggleTheme];
};

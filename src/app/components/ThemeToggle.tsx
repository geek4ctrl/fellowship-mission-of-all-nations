"use client";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="px-4 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black shadow-lg border border-gray-300 ml-2 h-10 flex items-center"
      onClick={() => {
        const html = document.documentElement;
        if (html.classList.contains("dark")) {
          html.classList.remove("dark");
          localStorage.setItem("theme", "light");
        } else {
          html.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }
      }}
    >
      Toggle Theme
    </button>
  );
}
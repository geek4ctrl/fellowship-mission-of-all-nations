"use client";

export default function ThemeToggle() {
  // Detect current theme for icon
  const isDark = globalThis.window !== undefined && document.documentElement.classList.contains("dark");
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 shadow transition-colors duration-300 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
      {isDark ? (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
      ) : (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
      )}
    </button>
  );
}
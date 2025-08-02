"use client";
import React, { useState, useEffect } from "react";
import LandingPage from "@/features/LandingPage";
import DemoApp from "@/features/Demo";
import { Moon, Sun } from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState<"landing" | "demo">("landing");
  // const [darkMode, setDarkMode] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     return (
  //       localStorage.getItem("darkMode") === "true" ||
  //       (!localStorage.getItem("darkMode") &&
  //         window.matchMedia("(prefers-color-scheme: dark)").matches)
  //     );
  //   }
  //   return false;
  // });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Only run on client
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) {
      setDarkMode(stored === "true");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-slate-600" />
        )}
      </button>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-50">
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage("landing")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              currentPage === "landing"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage("demo")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              currentPage === "demo"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800"
            }`}
          >
            Demo
          </button>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === "landing" ? (
        <LandingPage onNavigateToDemo={() => setCurrentPage("demo")} />
      ) : (
        <DemoApp onNavigateToLanding={() => setCurrentPage("landing")} />
      )}
    </div>
  );
}

export default App;

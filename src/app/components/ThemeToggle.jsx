"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-200 ${darkMode
                    ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                    : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                }`}
            aria-label="Toggle Theme"
        >
            {darkMode ? (
                <SunIcon className="h-5 w-5" />
            ) : (
                <MoonIcon className="h-5 w-5" />
            )}
        </button>
    );
};

export default ThemeToggle;

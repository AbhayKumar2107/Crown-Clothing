import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="w-full rounded-full border border-stone-950 bg-stone-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-800 sm:w-auto dark:border-white dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
        >
            {theme === "light" ? "Dark" : "Light"}
        </button>
    );
};

export default ThemeToggle;

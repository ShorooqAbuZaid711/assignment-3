import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      <span className="theme-toggle-track" aria-hidden="true" />
      <span className="theme-toggle-thumb">
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}